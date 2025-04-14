'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node extends d3.SimulationNodeDatum {
  id: number;
  group: number;
  size: number;
  isConnector?: boolean;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  value: number;
  source: Node;
  target: Node;
}

// Enhanced dummy data structure with connector nodes
const generateDummyData = () => {
  const numBranches = 7; // Number of distinct branches
  const nodesPerBranch = 12; // Nodes per branch
  const nodes: Node[] = [];
  const links: Link[] = [];
  
  // Create central connector node
  const centralNode: Node = {
    id: 0,
    group: -1, // Special group for connector
    size: 2.5,
    isConnector: true,
  };
  nodes.push(centralNode);

  // Create branch connector nodes
  const branchConnectors: Node[] = Array.from({ length: numBranches }, (_, i) => ({
    id: i + 1,
    group: i,
    size: 2,
    isConnector: true,
  }));
  nodes.push(...branchConnectors);

  // Connect branch connectors to central node
  branchConnectors.forEach(connector => {
    links.push({
      source: centralNode,
      target: connector,
      value: 2,
    } as Link);
  });

  // Create branches
  let currentId = numBranches + 1;
  branchConnectors.forEach((connector, branchIndex) => {
    // Create nodes for this branch
    const branchNodes: Node[] = Array.from({ length: nodesPerBranch }, () => ({
      id: currentId++,
      group: branchIndex,
      size: Math.random() * 1.5 + 1,
    }));
    nodes.push(...branchNodes);

    // Connect nodes within the branch
    branchNodes.forEach((node, i) => {
      // Connect to branch connector
      links.push({
        source: connector,
        target: node,
        value: 1.5,
      } as Link);

      // Connect to some previous nodes in the same branch
      for (let j = Math.max(0, i - 2); j < i; j++) {
        if (Math.random() < 0.7) {
          links.push({
            source: branchNodes[j],
            target: node,
            value: 1,
          } as Link);
        }
      }
    });
  });

  return { nodes, links };
};

// Custom color scheme for branches
const branchColors = [
  '#e41a1c', // red
  '#377eb8', // blue
  '#4daf4a', // green
  '#984ea3', // purple
  '#ff7f00', // orange
  '#a65628', // brown
  '#f781bf', // pink
];

export default function ForceGraph() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const data = generateDummyData();

    // Create curved edges
    const linkGenerator = d3.line().curve(d3.curveNatural);

    const simulation = d3.forceSimulation<Node>(data.nodes)
      .force("link", d3.forceLink<Node, Link>(data.links)
        .id(d => d.id)
        .distance(d => d.source.isConnector || d.target.isConnector ? 120 : 60)
        .strength(d => d.source.isConnector || d.target.isConnector ? 0.3 : 0.7))
      .force("charge", d3.forceManyBody()
        .strength(d => d.isConnector ? -300 : -100)
        .distanceMax(350))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(d => (d.size || 1) * 5))
      .velocityDecay(0.1); // Slower decay for continuous motion

    // Create curved links
    const link = svg.append("g")
      .selectAll("path")
      .data(data.links)
      .join("path")
      .style("stroke", d => {
        if (d.source.group === -1 || d.target.group === -1) {
          return '#999'; // Connector links are gray
        }
        return branchColors[d.source.group % branchColors.length];
      })
      .style("stroke-opacity", 0.3)
      .style("stroke-width", d => Math.sqrt(d.value || 1))
      .style("fill", "none");

    const node = svg.append("g")
      .selectAll("circle")
      .data(data.nodes)
      .join("circle")
      .attr("r", d => (d.size || 1) * 4)
      .style("fill", d => {
        if (d.isConnector) {
          return d.group === -1 ? '#666' : branchColors[d.group % branchColors.length];
        }
        return branchColors[d.group % branchColors.length];
      })
      .style("fill-opacity", d => d.isConnector ? 0.9 : 0.7)
      .style("stroke", "#fff")
      .style("stroke-width", d => d.isConnector ? 2 : 1.5);

    simulation.on("tick", () => {
      // Update curved links
      link.attr("d", (d: any) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy) * 1.5; // Adjust curve
        return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
      });

      node
        .attr("cx", d => Math.max(30, Math.min(width - 30, d.x || 0)))
        .attr("cy", d => Math.max(30, Math.min(height - 30, d.y || 0)));
    });

    // Add continuous motion
    function jiggle() {
      simulation.alpha(0.1).restart(); // Gentle restart
      setTimeout(jiggle, 5000); // Restart every 5 seconds
    }
    jiggle();

    // Handle window resize
    const handleResize = () => {
      svg
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight);
      
      simulation
        .force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2))
        .restart();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      simulation.stop();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.3,
        pointerEvents: 'none'
      }}
    />
  );
} 