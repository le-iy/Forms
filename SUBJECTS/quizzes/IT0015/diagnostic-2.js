
window.PandoraQuizzes.register({
  id: "IT0015-M02-DIAG",
  subject: "IT0015",
  module: 2,
  title: "Diagnostic Test 2",
  kind: "practice",
  version: 1,
  description: "Diagnostic test covering EtherChannel, STP, RSTP, DHCPv4, DHCPv6, and SLAAC. Includes 19 available questions; Question 3 is absent from the source PDF.",
  createdAt: "2026-11-08T10:20:40+08:00",
  showOnHome: true,
  
  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "You have two switches connected together with two crossover cables for redundancy, and STP is disabled. Which of the following will happen between the switches?",
      options: [
        "The MAC forward/filter table will not update on the switch.",
        "Broadcast storms will occur on the switched network.",
        "The routing tables on the switches will not update.",
        "The switches will automatically load-balance between the two links."
      ],
      correctAnswer: 1,
      explanation: "Without Spanning Tree Protocol, redundant Layer 2 links can create a switching loop. Broadcast frames can circulate repeatedly because Ethernet frames have no time-to-live field. This leads to broadcast storms, duplicate frames, and unstable MAC address tables. Redundant cables do not automatically perform load balancing.",
      reference: "Cisco CCNA — Spanning Tree Protocol and Layer 2 Loops"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "Which mode configuration setting would allow formation of an EtherChannel link between switches SW1 and SW2 without sending negotiation traffic?",
      options: [
        "SW1: on\nSW2: on",
        "SW1: auto\nSW2: auto\ntrunking enabled on both switches",
        "SW1: desirable\nSW2: desirable",
        "SW1: auto\nSW2: auto\nPortFast enabled on both switches"
      ],
      correctAnswer: 0,
      explanation: "EtherChannel 'on' mode creates a static channel without exchanging PAgP or LACP negotiation messages. Both ends must be configured consistently. PAgP desirable mode actively negotiates, while auto mode listens for negotiation. Two auto-mode ports cannot establish an EtherChannel with each other, even when trunking or PortFast is enabled.",
      reference: "Cisco CCNA — EtherChannel Modes: On, Auto, Desirable"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Which one is an advantage of using LACP?",
      options: [
        "It provides a simulated environment for testing link aggregation.",
        "It decreases the amount of configuration that is needed on a switch.",
        "It provides a simulated environment for testing link aggregation.",
        "It allows directly connected switches to negotiate an EtherChannel link."
      ],
      correctAnswer: 3,
      explanation: "Link Aggregation Control Protocol allows compatible devices to negotiate which physical interfaces can form a single logical link aggregation group. LACP improves interoperability and helps prevent unsuitable ports from joining the bundle. It does not create a simulated testing environment. The repeated distractor is preserved exactly from the assessment.",
      reference: "IEEE 802.1AX — Link Aggregation; Cisco LACP"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "Which one is an advantage of EtherChannel?",
      options: [
        "Spanning Tree Protocol views the physical links in an EtherChannel as one logical connection.",
        "Load balancing occurs between links configured as different EtherChannels.",
        "EtherChannel uses upgraded physical links to provide increased bandwidth.",
        "Spanning Tree Protocol ensures redundancy by transitioning failed interfaces in an EtherChannel to a forwarding state."
      ],
      correctAnswer: 0,
      explanation: "EtherChannel groups multiple compatible physical ports into one logical Port-channel. STP treats the entire bundle as one logical connection, allowing active member links to carry traffic without being individually blocked as redundant paths. EtherChannel can distribute traffic among member links and maintain connectivity when one member link fails.",
      reference: "Cisco CCNA — EtherChannel Advantages and STP"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "What one is a requirement to be able to configure an EtherChannel between two switches?",
      options: [
        "All interfaces need to be assigned to different VLANs.",
        "The interfaces that are involved need to be contiguous on the switch.",
        "Different allowed ranges of VLANs must exist on each end.",
        "All the interfaces need to be working in the same duplex mode."
      ],
      correctAnswer: 3,
      explanation: "EtherChannel member interfaces must have compatible speed and duplex settings. They must also have consistent Layer 2 configuration, including trunk or access mode and applicable VLAN parameters. Interfaces do not need consecutive port numbers, and using different VLAN configurations can prevent successful bundling.",
      reference: "Cisco — EtherChannel Interface Configuration Requirements"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "It is a Fast converging enhancement of IEEE 802.1D",
      options: [
        "PVST+",
        "MSTP",
        "RAPID PVST+",
        "RSTP"
      ],
      correctAnswer: 3,
      explanation: "Rapid Spanning Tree Protocol is the faster-converging development of traditional IEEE 802.1D STP. Originally standardized under IEEE 802.1w, RSTP improves convergence through rapid port transitions and proposal-agreement mechanisms. Rapid PVST+ applies rapid spanning tree behavior on a per-VLAN basis, but RSTP is the general protocol named in the question.",
      reference: "IEEE 802.1w — Rapid Spanning Tree Protocol"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "In which circumstance are multiple copies of the same unicast frame likely to be transmitted in a switched LAN?",
      options: [
        "In an improperly implemented redundant topology",
        "During high-traffic periods",
        "When upper-layer protocols require high reliability",
        "After broken links are reestablished"
      ],
      correctAnswer: 0,
      explanation: "An improperly designed Layer 2 redundant topology may contain switching loops. A frame can circulate through different switch paths, resulting in duplicate copies of the same unicast frame. High traffic alone does not produce this switching-loop behavior.",
      reference: "Cisco CCNA — Layer 2 Switching Loops and Duplicate Frames"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "What is a drawback to turning spanning tree off and having multiple paths through the Layer 2 switch network?",
      options: [
        "The switch acts like a hub.",
        "The MAC address table becomes unstable.",
        "Port security shuts down all of the ports that have attached devices.",
        "Port security becomes unstable."
      ],
      correctAnswer: 1,
      explanation: "Without spanning tree protection, Layer 2 loops can make a switch learn the same source MAC address through different interfaces repeatedly. This is called MAC address flapping, and it makes the MAC forwarding table unstable. STP prevents loops by blocking selected redundant paths.",
      reference: "Cisco CCNA — STP and MAC Address Table Instability"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Which one is a component of a bridge ID?",
      options: [
        "extended system ID",
        "IP address",
        "bridge priority",
        "port ID"
      ],
      correctAnswer: 2,
      explanation: "The STP Bridge ID includes a priority field and the bridge MAC address. In the extended system ID format, the priority field is composed of a configurable bridge priority value and an extended system ID, commonly representing the VLAN. Therefore, 'bridge priority' is valid, but 'extended system ID' is also a technically valid component. An IP address and a port ID are not components of the Bridge ID.",
      reference: "Cisco CCNA — Bridge ID, Bridge Priority, and Extended System ID"
    },
    {
      id: "q11",
      type: "true_false",
      question: "The M flag signifies to use a stateful DHCPv6 server to obtain an IPv6 Global Unicast Address.",
      correctAnswer: true,
      explanation: "The Managed Address Configuration flag, or M flag, appears in IPv6 Router Advertisements. When set, it tells hosts to use stateful DHCPv6 for address configuration. The DHCPv6 server allocates an IPv6 address, while the default gateway is still learned through Router Advertisements.",
      reference: "Cisco CCNA — IPv6 Router Advertisement M Flag and Stateful DHCPv6"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "Refer to the exhibit. PC1 is configured to obtain a dynamic IP address from the DHCP server. PC1 has been shut down for two weeks. When PC1 boots and tries to request an available IP address, which destination IP address will PC1 place in the IP header?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-diagnostic2-q12-dhcp-topology-v2.png",
      options: [
        "192.168.1.1",
        "192.168.1.255",
        "255.255.255.255",
        "192.168.1.8"
      ],
      correctAnswer: 2,
      explanation: "A DHCP client that does not have a valid address broadcasts a DHCPDISCOVER packet. The destination IPv4 address is 255.255.255.255, allowing the client to contact DHCP servers without knowing their addresses. The client initially uses 0.0.0.0 as its source address. The addresses of the router, PC, and DHCP server in the diagram do not change the initial broadcast destination.",
      reference: "RFC 2131 — DHCPDISCOVER; Cisco DHCPv4"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "Which set of commands will configure a router as a DHCP server that will assign IPv4 addresses to the 192.168.100.0/23 LAN while reserving the first 10 and the last addresses for static assignment?",
      options: [
        "ip dhcp excluded-address 192.168.100.1 192.168.100.10\nip dhcp excluded-address 192.168.100.254\nip dhcp pool LAN-POOL-100\nnetwork 192.168.100.0 255.255.255.0\nip default-gateway 192.168.100.1",
        "ip dhcp excluded-address 192.168.100.1 192.168.100.9\nip dhcp excluded-address 192.168.101.254\nip dhcp pool LAN-POOL-100\nip network 192.168.100.0 255.255.254.0\nip default-gateway 192.168.100.1",
        "dhcp pool LAN-POOL-100\nip dhcp excluded-address 192.168.100.1 192.168.100.9\nip dhcp excluded-address 192.168.100.254\nnetwork 192.168.100.0 255.255.254.0\ndefault-router 192.168.101.1",
        "ip dhcp excluded-address 192.168.100.1 192.168.100.10\nip dhcp excluded-address 192.168.101.254\nip dhcp pool LAN-POOL-100\nnetwork 192.168.100.0 255.255.254.0\ndefault-router 192.168.100.1"
      ],
      correctAnswer: 3,
      explanation: "A /23 network uses subnet mask 255.255.254.0, covering addresses 192.168.100.0 through 192.168.101.255. The first ten usable host addresses are 192.168.100.1 through 192.168.100.10, while the final usable host address is 192.168.101.254. The fourth command set excludes exactly these addresses, creates the DHCP pool, configures the correct network and subnet mask, and supplies the default gateway through 'default-router'. The other choices use incorrect subnet masks, exclusions, or DHCP commands.",
      reference: "Cisco IOS — DHCPv4 Server Configuration; IPv4 Subnetting"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "What is the reason that an ISP commonly assigns a DHCP address to a wireless router in a SOHO environment?",
      options: [
        "better network performance",
        "better connectivity",
        "easy IP address management",
        "easy configuration on ISP firewall"
      ],
      correctAnswer: 2,
      explanation: "DHCP automatically assigns an IP address and related network settings to the wireless router's WAN interface. This simplifies address administration for the ISP because addresses can be assigned and renewed without configuring each customer router manually. DHCP does not directly increase the physical network speed.",
      reference: "Cisco CCNA — DHCPv4 and SOHO Router Configuration"
    },
    {
      id: "q15",
      type: "true_false",
      question: "To verify a Stateless DHCPv6 Client Router receiver other necessary DHCPv6 information, using The show ipv6 dhcp interface-type interface-number command in global configuration mode of the Client Router.",
      correctAnswer: false,
      explanation: "Cisco 'show' verification commands are executed in privileged EXEC mode, not global configuration mode. The question is false because it specifies the wrong command mode. The correct verification syntax depends on the Cisco IOS platform and the information being inspected.",
      reference: "Cisco IOS — DHCPv6 Verification and Command Modes"
    },
    {
      id: "q16",
      type: "true_false",
      question: "The first step in configuring a Stateless DHCPv6 server is enabling the IPv6 routing using the ipv6 unicast-routing command",
      correctAnswer: true,
      explanation: "In the standard Cisco router-based DHCPv6 configuration procedure, 'ipv6 unicast-routing' enables IPv6 forwarding and Router Advertisement functionality. Stateless DHCPv6 then provides other configuration parameters, such as DNS information, while SLAAC can generate the client's IPv6 address.",
      reference: "Cisco CCNA — Stateless DHCPv6 Configuration"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "Identify which message type to the order of the stateful DHCPv6 process when a client first connects to an IPv6 network. DHCPv6 REPLY",
      options: [
        "Step 4",
        "Step 1",
        "Step 3",
        "Step 2"
      ],
      correctAnswer: 0,
      explanation: "The typical stateful DHCPv6 address allocation exchange follows four messages: SOLICIT, ADVERTISE, REQUEST, and REPLY. The client first looks for a server, the server advertises its service, the client requests configuration, and the server sends REPLY to complete the process. Therefore, REPLY is Step 4.",
      reference: "RFC 8415 — DHCPv6 Message Exchange"
    },
    {
      id: "q18",
      type: "true_false",
      question: "SLAAC is a service which means there is no server that maintains network address information to know which IPv6 addresses are being used and which ones are available.",
      correctAnswer: true,
      explanation: "SLAAC means Stateless Address Autoconfiguration. Hosts independently configure IPv6 addresses using network prefixes advertised by routers rather than depending on a stateful DHCPv6 server to assign and track every address. Duplicate Address Detection helps hosts avoid conflicts.",
      reference: "RFC 4862 — IPv6 Stateless Address Autoconfiguration"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "Which DHCP IPv4 message contains the following information?\n\nDestination address: 255.255.255.255\nClient IPv4 address: 0.0.0.0\nDefault gateway address: 0.0.0.0\nSubnet mask: 0.0.0.0",
      options: [
        "DHCPREQUEST",
        "DHCPDISCOVER",
        "DHCPOFFER",
        "DHCPACK"
      ],
      correctAnswer: 1,
      explanation: "When an IPv4 client starts without an assigned address, it sends DHCPDISCOVER using source address 0.0.0.0 and broadcast destination 255.255.255.255. The client does not yet have confirmed gateway or subnet settings. The usual DHCPv4 process is Discover, Offer, Request, Acknowledge.",
      reference: "RFC 2131 — DHCPv4 Message Exchange"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "Which message does an IPv4 host use to reply when it receives a DHCPOFFER message from a DHCP server?",
      options: [
        "DHCPOFFER",
        "DHCPDISCOVER",
        "DHCPREQUEST",
        "DHCPACK"
      ],
      correctAnswer: 2,
      explanation: "After receiving a DHCPOFFER, the client sends DHCPREQUEST to indicate that it wants to accept the offered address from a selected DHCP server. The server then responds with DHCPACK to confirm the lease. The sequence is DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, DHCPACK.",
      reference: "RFC 2131 — DHCPv4 DORA Process"
    }
  ]
});
