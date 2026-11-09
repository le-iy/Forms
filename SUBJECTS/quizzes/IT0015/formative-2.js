
window.PandoraQuizzes.register({
  id: "IT0015-M04-F02",
  subject: "IT0015",
  module: 4,
  title: "Formative Assessment 2",
  kind: "formative",
  version: 1,
  description: "40-item formative assessment on STP, EtherChannel, DHCPv4, DHCPv6, SLAAC, and first-hop redundancy. Original score: 32/40.",
  createdAt: "2026-11-10T05:45:00+08:00",
  showOnHome: true,
  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Which statement describes an EtherChannel implementation?",
      options: [
        "A trunked port can be part of an EtherChannel bundle.",
        "PAgP cannot be used in conjunction with EtherChannel.",
        "EtherChannel operates only at Layer 2.",
        "EtherChannel can support up to a maximum of ten separate links."
      ],
      correctAnswer: 0,
      explanation: "EtherChannel can aggregate interfaces configured as access ports or trunks, provided all member ports have compatible settings. PAgP is one of the protocols used to negotiate EtherChannel, and supported devices can also form Layer 3 EtherChannels. There is no universal ten-link maximum.",
      reference: "Cisco CCNA — EtherChannel Configuration and Compatibility"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "A switch is configured to run STP. What term describes a field used to specify a VLAN ID?",
      options: [
        "bridge priority",
        "extended system ID",
        "port ID",
        "bridge ID"
      ],
      correctAnswer: 1,
      explanation: "The extended system ID is used within an STP Bridge ID to distinguish VLANs. In common Cisco per-VLAN spanning-tree implementations, the VLAN number is represented by the extended system ID. Bridge priority helps determine the root bridge but is not itself the VLAN identifier.",
      reference: "Cisco — STP Extended System ID"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "Which statement is true regarding the Port Aggregation Protocol?",
      options: [
        "Configuration changes made on a physical port that is a member of a port-channel interface apply to the port-channel interface.",
        "Configuration changes are not permitted with Port Aggregation Protocol; instead, the standardized Link Aggregation Control Protocol should be used if configuration changes are required.",
        "The physical port must first be dissociated from the port-channel interface before any configuration changes can be made.",
        "Configuration changes made on the port-channel interface apply to all physical ports assigned to the port-channel interface."
      ],
      correctAnswer: 3,
      explanation: "The logical Port-channel interface manages the aggregated link. Applying appropriate configuration to the Port-channel propagates the relevant settings to its member interfaces. PAgP is Cisco's negotiation protocol for EtherChannel and does not prohibit interface configuration.",
      reference: "Cisco — PAgP and Port-channel Interface Configuration"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Which port role is assigned to the switch port that has the lowest cost to reach the root bridge?",
      options: [
        "root port",
        "disabled port",
        "non-designated port",
        "designated port"
      ],
      correctAnswer: 0,
      explanation: "Each non-root bridge normally selects one root port, which offers the lowest total path cost to the root bridge. A designated port forwards for a particular network segment. Disabled and non-designated ports are not selected as the switch's best path to the root.",
      reference: "Cisco CCNA — STP Root Port Selection"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "Refer to the exhibit. An EtherChannel was configured between switches S1 and S2, but the interfaces do not form an EtherChannel. What is the problem?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-fa2-q5.png",
      options: [
        "The EtherChannel was not configured with the same allowed range of VLANs on each interface.",
        "The switch ports were not configured with speed and duplex mode.",
        "The interface port-channel number has to be different on each switch.",
        "The switch ports have to be configured as access ports with each port having a VLAN assigned."
      ],
      correctAnswer: 0,
      explanation: "S1 allows VLANs 1 through 5 and VLAN 10, while S2 allows only VLANs 1, 5, and 10. The mismatch in allowed VLAN lists makes the trunk configurations inconsistent. EtherChannel member interfaces require compatible trunk parameters. Both ends may use the same Port-channel group number, and trunk ports do not need to become access ports.",
      reference: "Cisco — EtherChannel Trunk Configuration Requirements"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "Which one is a component of a bridge ID?",
      options: [
        "port ID",
        "bridge priority",
        "extended system ID",
        "IP address"
      ],
      correctAnswer: 1,
      explanation: "The STP Bridge ID includes a priority field and a MAC address. With extended system ID support, the priority field also contains an extended system ID, usually representing the VLAN. Thus both bridge priority and extended system ID are technically associated with the Bridge ID. The selected bridge priority is a valid answer, although the question has two defensible options.",
      reference: "Cisco — STP Bridge ID and Extended System ID"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "What is a characteristic of spanning tree?",
      options: [
        "It is enabled by default on Cisco switches.",
        "It prevents propagation of Layer 2 broadcast frames.",
        "It is used to discover information about an adjacent Cisco device.",
        "It has a TTL mechanism that works at Layer 2."
      ],
      correctAnswer: 0,
      explanation: "Spanning Tree Protocol is enabled by default on many Cisco Catalyst switch configurations and prevents switching loops by logically blocking redundant paths. It does not stop all broadcast frames, discover neighbors like CDP, or add a time-to-live value to Ethernet frames. Preventing broadcast storms is different from preventing ordinary broadcasts.",
      reference: "Cisco CCNA — STP Fundamentals"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Which statement is true regarding the use of PAgP to create EtherChannels?",
      options: [
        "It is Cisco proprietary.",
        "It requires full duplex.",
        "It increases the number of ports that are participating in spanning tree.",
        "It requires more physical links than LACP does."
      ],
      correctAnswer: 0,
      explanation: "Port Aggregation Protocol (PAgP) is Cisco's proprietary EtherChannel negotiation protocol. LACP is the standards-based alternative. PAgP does not require a greater number of links than LACP and does not make STP view every bundled physical member as an independent logical link.",
      reference: "Cisco — PAgP and LACP"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Refer to the exhibit. Which switch will be the root bridge after the election process is complete?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-fa2-q9.png",
      options: ["S3", "S1", "S4", "S2"],
      correctAnswer: 3,
      explanation: "STP elects the switch with the lowest Bridge ID. All four switches shown have the same bridge priority, 32769, so the election is decided by their MAC addresses. S2 has the lowest MAC address among the four, so S2 becomes the root bridge. The positions of switches in the diagram do not determine the election.",
      reference: "Cisco — STP Root Bridge Election and Bridge ID Comparison"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Which mode configuration setting would allow formation of an EtherChannel link between switches SW1 and SW2 without sending negotiation traffic?",
      options: [
        "SW1: auto\nSW2: auto\ntrunking enabled on both switches",
        "SW1: on\nSW2: on",
        "SW1: desirable\nSW2: desirable",
        "SW1: auto\nSW2: auto\nPortFast enabled on both switches"
      ],
      correctAnswer: 1,
      explanation: "The static EtherChannel 'on' mode forms a bundle without PAgP or LACP negotiation traffic. Both ends must be configured consistently. PAgP desirable sends negotiation messages, while two auto ports cannot initiate negotiation with one another. Trunking and PortFast do not replace EtherChannel formation.",
      reference: "Cisco — EtherChannel On, Auto, and Desirable Modes"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "Refer to the exhibit. The administrator tried to create an EtherChannel between S1 and the other two switches via the commands that are shown, but was unsuccessful. What is the problem?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-fa2-q11.png",
      options: [
        "Traffic can only be sent to two different switches if EtherChannel is implemented on Layer 3 switches.",
        "Traffic cannot be sent to two different switches through the same EtherChannel link.",
        "Traffic cannot be sent to two different switches, but only to two different devices like an EtherChannel-enabled server and a switch.",
        "Traffic can only be sent to two different switches if EtherChannel is implemented on Gigabit Ethernet interfaces."
      ],
      correctAnswer: 1,
      explanation: "A conventional EtherChannel groups links that terminate at one logical peer. In the diagram, S1 attempts to place ports connected to two independent switches into one bundle. That cannot form a normal EtherChannel. Special multi-chassis technologies can support links to multiple physical switches if they operate as one logical peer, but that is not shown here.",
      reference: "Cisco — EtherChannel Peer and Member Port Requirements"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "What does the command channel-group 1 mode desirable do?\n\nInterface FastEthernet 0/13\nChannel-group 1 mode desirable",
      options: [
        "enables PAgP only if a PAgP device is detected",
        "enables LACP only if a LACP device is detected",
        "enables EtherChannel only",
        "enables PAgP unconditionally"
      ],
      correctAnswer: 3,
      explanation: "PAgP desirable mode actively initiates negotiation by sending PAgP packets. Cisco describes it as unconditionally enabling PAgP. PAgP auto responds when a PAgP-capable neighbor is detected, while active and passive are modes associated with LACP.",
      reference: "Cisco — channel-group Command and PAgP Desirable Mode"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "Which Cisco command will initiate EtherChannel interface configuration mode?",
      options: [
        "#channel-group group-identifier",
        "#interface interface-identifier",
        "#interface port-channel interface-identifier",
        "#interface range interface-identifier"
      ],
      correctAnswer: 2,
      explanation: "The 'interface port-channel' command enters configuration mode for the logical Port-channel interface. 'channel-group' is used on physical interfaces to associate them with an EtherChannel. 'interface range' selects several physical ports, rather than directly entering the logical Port-channel configuration.",
      reference: "Cisco IOS — interface port-channel Command"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "Refer to the exhibit. What are the possible port roles for ports A, B, C, and D in this RSTP-enabled network?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-fa2-q14.png",
      options: [
        "alternate, root, designated, root",
        "designated, alternate, root, root",
        "alternate, designated, root, root",
        "designated, root, alternate, root"
      ],
      correctAnswer: 2,
      explanation: "S1 is the root bridge, so its port B is designated. S2 and S3 each have a direct path to S1, giving ports C and D root roles. The redundant S2–S3 link can leave port A as an alternate port, assuming S3 wins the designated-port election on that segment. The sequence is therefore alternate, designated, root, root.",
      reference: "Cisco — RSTP Root, Designated, and Alternate Port Roles"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "What is the value used to determine which port on a non-root bridge will become a root port in a STP network?",
      options: [
        "the highest MAC address of all the ports in the switch",
        "the path cost",
        "the lowest MAC address of all the ports in the switch",
        "the VTP revision number"
      ],
      correctAnswer: 1,
      explanation: "A non-root switch chooses the port offering the lowest cumulative STP path cost to the root bridge. If costs tie, additional BPDU information determines the winner. Individual port MAC addresses and VTP revision numbers are not the primary selection metric.",
      reference: "Cisco — STP Root Port Path Cost"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "A switch is configured to run STP. What term describes a field used to specify a VLAN ID?",
      options: [
        "MAC Address",
        "bridge priority",
        "port ID",
        "extended system ID"
      ],
      correctAnswer: 3,
      explanation: "The extended system ID is used in STP Bridge ID encoding to indicate the VLAN. It shares the Bridge ID priority field with the configurable priority portion, enabling spanning-tree calculations per VLAN.",
      reference: "Cisco — STP Extended System ID"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "In which port state does a switch learn MAC addresses and process BPDUs in a PVST network?",
      options: [
        "disabled",
        "learning",
        "blocking",
        "listening"
      ],
      correctAnswer: 1,
      explanation: "An STP port in the learning state processes BPDUs and learns source MAC addresses, but it does not yet forward ordinary data traffic. Listening processes BPDUs without learning addresses; blocking prevents data forwarding and learning.",
      reference: "Cisco — STP Learning State"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "A network administrator configured an EtherChannel link with three interfaces between two switches. What is the result if one of the three interfaces is down?",
      options: [
        "The EtherChannel fails.",
        "The remaining two interfaces continue to load balance traffic.",
        "One interface becomes an active link for data traffic and the other becomes a backup link.",
        "The remaining two interfaces become separate links between the two switches."
      ],
      correctAnswer: 1,
      explanation: "A properly configured EtherChannel normally remains functional when a member interface fails, as long as any minimum-links requirement remains satisfied. The remaining active members continue to carry traffic using the configured load-balancing mechanism.",
      reference: "Cisco — EtherChannel Link Redundancy"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "Refer to the exhibit. While troubleshooting a switch, you executed the “show interface port-channel 1 etherchannel” command and it returned this output. Which information is provided by the Load value?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-fa2-q19.png",
      options: [
        "the preference of the link",
        "the number source-destination pairs on the link",
        "the percentage of use of the link",
        "the session count of the link"
      ],
      correctAnswer: 1,
      explanation: "The Load field is a hexadecimal bitmask representing how EtherChannel hashing results are distributed across member links. It is associated with source/destination-based hash assignments, not a direct measurement of real-time bandwidth usage. The adjacent 'No of bits' column indicates the share of hash buckets assigned to each physical interface.",
      reference: "Cisco — EtherChannel Hash-Based Load Balancing"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "When the show spanning-tree vlan 33 command is issued on a switch, three ports are shown in the forwarding state. In which port role could these interfaces function while in the forwarding state?",
      options: [
        "root",
        "alternate",
        "disabled",
        "blocked"
      ],
      correctAnswer: 0,
      explanation: "A root port is the best path from a non-root switch toward the root bridge and normally forwards traffic. Designated ports also forward, but designated is not one of the choices. Alternate, disabled, and blocked ports are not normal forwarding ports.",
      reference: "Cisco — STP Root Port and Forwarding State"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "A network administrator configures a router to send RA messages with M flag as 0 and O flag as 1. Which statement describes the effect of this configuration when a PC tries to configure its IPv6 address?",
      options: [
        "It should contact a DHCPv6 server for all the information that it needs.",
        "It should use the information that is contained in the RA message exclusively.",
        "It should use the information that is contained in the RA message and contact a DHCPv6 server for additional information.",
        "It should contact a DHCPv6 server for the prefix, the prefix-length information, and an interface ID that is both random and unique."
      ],
      correctAnswer: 2,
      explanation: "M=0 means the Router Advertisement does not direct the host to use stateful DHCPv6 address assignment. O=1 means DHCPv6 can supply other configuration information, such as DNS server addresses. The host can use the RA prefix for SLAAC when the prefix's autonomous-address flag permits it.",
      reference: "Cisco CCNA — IPv6 Router Advertisement M and O Flags"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "A client device on an Ethernet segment needs an IP address in order to communicate on the network. A DHCP server with IP address 192.168.1.1 has been configured and enabled on the network. How will a client device obtain a usable IP address for this network?",
      options: [
        "Send a DHCPDISCOVER message to physical address FF-FF-FF-FF-FF-FF.",
        "Use a statically configured IP address from the pool of IP addresses that is offered by the DHCP server.",
        "Send a DHCPACK packet to the default gateway address.",
        "Send a DHCPREQUEST packet to IP address 255.255.255.255."
      ],
      correctAnswer: 0,
      explanation: "An unconfigured DHCPv4 client begins address discovery by sending a DHCPDISCOVER broadcast. On Ethernet, the destination MAC is FF-FF-FF-FF-FF-FF. The server responds with an offer, and the client subsequently requests and receives acknowledgement of a lease.",
      reference: "RFC 2131 — DHCPDISCOVER"
    },
    {
      id: "q23",
      type: "multiple_choice",
      question: "The address pool of a DHCP server is configured with 172.21.121.0/25. The network administrator reserves 12 IP addresses for web servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      options: ["112", "115", "114", "118"],
      correctAnswer: 2,
      explanation: "A /25 network contains 128 IPv4 addresses. Subtract the network and broadcast addresses, leaving 126 usable host addresses. Reserving 12 for web servers leaves 126 − 12 = 114 available addresses.",
      reference: "IPv4 Subnetting — /25 Usable Hosts"
    },
    {
      id: "q24",
      type: "multiple_choice",
      question: "Identify which message type to the order of the stateful DHCPv6 process when a client first connects to an IPv6 network. DHCPv6 SOLICIT",
      options: ["Step 4", "Step 3", "Step 2", "Step 1"],
      correctAnswer: 3,
      explanation: "The normal four-message stateful DHCPv6 exchange is SOLICIT, ADVERTISE, REQUEST, and REPLY. SOLICIT is the first message, sent by the client to discover DHCPv6 servers.",
      reference: "RFC 8415 — Stateful DHCPv6 Exchange"
    },
    {
      id: "q25",
      type: "multiple_choice",
      question: "Which set of commands will configure a router as a DHCP server that will assign IPv4 addresses to the 192.168.100.0/23 LAN while reserving the first 10 and the last addresses for static assignment?",
      options: [
        "ip dhcp excluded-address 192.168.100.1 192.168.100.10\nip dhcp excluded-address 192.168.100.254\nip dhcp pool LAN-POOL-100\nnetwork 192.168.100.0 255.255.255.0\nip default-gateway 192.168.100.1",
        "dhcp pool LAN-POOL-100\nip dhcp excluded-address 192.168.100.1 192.168.100.9\nip dhcp excluded-address 192.168.100.254\nnetwork 192.168.100.0 255.255.254.0\ndefault-router 192.168.101.1",
        "ip dhcp excluded-address 192.168.100.1 192.168.100.9\nip dhcp excluded-address 192.168.101.254\nip dhcp pool LAN-POOL-100\nip network 192.168.100.0 255.255.254.0\nip default-gateway 192.168.100.1",
        "ip dhcp excluded-address 192.168.100.1 192.168.100.10\nip dhcp excluded-address 192.168.101.254\nip dhcp pool LAN-POOL-100\nnetwork 192.168.100.0 255.255.254.0\ndefault-router 192.168.100.1"
      ],
      correctAnswer: 3,
      explanation: "The /23 subnet mask is 255.255.254.0, making the usable host range 192.168.100.1 through 192.168.101.254. The first ten usable addresses are 192.168.100.1–192.168.100.10, and the last usable address is 192.168.101.254. The fourth set correctly excludes those addresses, creates the DHCP pool, specifies the /23 network, and uses 'default-router' to give clients their gateway. The last line of this fourth option is clipped in the FA2 screenshot and has been reconstructed from the identical question in the previously supplied diagnostic assessment.",
      reference: "Cisco IOS — DHCP Server Configuration; IT0015 Diagnostic 2"
    },
    {
      id: "q26",
      type: "multiple_choice",
      question: "The address pool of a DHCP server is configured with 10.19.44.0/24. The network administrator reserves 3 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      options: ["241", "251", "249", "255"],
      correctAnswer: 1,
      explanation: "A /24 subnet has 256 total addresses and 254 usable host addresses after excluding the network and broadcast addresses. Reserving three addresses for servers leaves 254 − 3 = 251.",
      reference: "IPv4 Subnetting — /24 Usable Hosts"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "A DHCP-enabled client PC has just booted. During which steps will the client PC use broadcast messages when communicating with a DHCP server?",
      options: ["DHCPACK", "DHCPNAK", "DHCPOFFER", "DHCPDISCOVER"],
      correctAnswer: 3,
      explanation: "A DHCP client broadcasts DHCPDISCOVER because it does not yet know which DHCP server can provide configuration. DHCPREQUEST may also be broadcast during initial address selection, but it is not among the supplied choices. DHCPACK and DHCPOFFER are server messages.",
      reference: "RFC 2131 — DHCP Initial Address Allocation"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "Which command will allow a network administrator to check the IP address that is assigned to a particular MAC address?",
      options: [
        "Router# show ip dhcp server statistics",
        "Router# show running-config | section_dhcp",
        "Router# show ip dhcp binding",
        "Router# show ip dhcp pool"
      ],
      correctAnswer: 2,
      explanation: "The 'show ip dhcp binding' command displays DHCP address leases and associated client identifiers or hardware information. It can be used to identify an address assigned to a client. Other commands show pool availability, configuration, or server statistics instead.",
      reference: "Cisco IOS — show ip dhcp binding"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "The address pool of a DHCP server is configured with 10.92.71.0/25. The network administrator reserves 8 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      options: ["108", "116", "119", "118"],
      correctAnswer: 3,
      explanation: "A /25 subnet contains 128 addresses, of which 126 are usable for hosts. After reserving eight addresses, 126 − 8 = 118 remain.",
      reference: "IPv4 Subnetting — /25 Usable Hosts"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "What information can be verified through the show ip dhcp binding command?",
      options: [
        "the number of IP addresses remaining in the DHCP pool",
        "the IPv4 addresses that have been excluded from the DHCPv4 pool",
        "that DHCPv4 discover messages are still being received by the DHCP server",
        "the IPv4 addresses that are assigned to hosts by the DHCP server"
      ],
      correctAnswer: 3,
      explanation: "The command lists current DHCP address bindings, allowing administrators to check which IPv4 addresses have been leased to clients. Excluded address ranges are configured separately, while discovery statistics and available address totals are found using other commands.",
      reference: "Cisco IOS — show ip dhcp binding"
    },
    {
      id: "q31",
      type: "true_false",
      question: "The A Flag signifies to use SLAAC to create an IPv6 Global Unicast Address",
      correctAnswer: true,
      explanation: "The Autonomous Address Configuration flag (A flag) in an IPv6 Router Advertisement prefix option indicates that the prefix can be used for SLAAC. A host can combine the advertised prefix with an interface identifier to configure a global unicast address, subject to normal prefix and duplicate-address checks.",
      reference: "RFC 4861; RFC 4862 — SLAAC A Flag"
    },
    {
      id: "q32",
      type: "multiple_choice",
      question: "What is the result of a network technician issuing the command ip dhcp excluded-address 10.0.15.1 10.0.15.15 on a Cisco router?",
      options: [
        "The Cisco router will automatically create a DHCP pool using a /28 mask.",
        "The Cisco router will allow only the specified IP addresses to be leased to clients.",
        "The Cisco router will exclude only the 10.0.15.1 and 10.0.15.15 IP addresses from being leased to DHCP clients.",
        "The Cisco router will exclude 15 IP addresses from being leased to DHCP clients."
      ],
      correctAnswer: 3,
      explanation: "The 'ip dhcp excluded-address' command accepts an inclusive range. From 10.0.15.1 to 10.0.15.15 there are fifteen addresses. All fifteen are excluded from DHCP allocation, not just the two endpoints. The command does not automatically create a DHCP pool.",
      reference: "Cisco IOS — ip dhcp excluded-address"
    },
    {
      id: "q33",
      type: "true_false",
      question: "A router that provided DHCPv6 forwarding services is a DHCP Relay Agent",
      correctAnswer: true,
      explanation: "A DHCPv6 relay agent forwards DHCPv6 messages between clients and servers, commonly across different network segments. This forwarding role differs from being the DHCPv6 server that allocates addresses or provides requested configuration.",
      reference: "Cisco — DHCPv6 Relay Agent"
    },
    {
      id: "q34",
      type: "multiple_choice",
      question: "Under which circumstance would a router usually be configured as a DHCPv4 client?",
      options: [
        "The router has a fixed IP address.",
        "The router is intended to be used as a SOHO gateway.",
        "The administrator needs the router to act as a relay agent.",
        "The router is meant to provide IP addresses to the hosts."
      ],
      correctAnswer: 1,
      explanation: "SOHO routers commonly obtain their WAN IPv4 configuration dynamically from an internet service provider. In that case the router acts as a DHCPv4 client toward the ISP, even if it separately serves DHCP addresses to local devices on its LAN.",
      reference: "Cisco CCNA — SOHO DHCPv4 Client Configuration"
    },
    {
      id: "q35",
      type: "multiple_choice",
      question: "Identify which message type to the order of the stateful DHCPv6 process when a client first connects to an IPv6 network. DHCPv6 Request",
      options: ["Step 3", "Step 2", "Step 4", "Step 1"],
      correctAnswer: 0,
      explanation: "The normal initial stateful DHCPv6 exchange is SOLICIT (Step 1), ADVERTISE (Step 2), REQUEST (Step 3), and REPLY (Step 4). The client sends REQUEST to select a DHCPv6 server and request configuration.",
      reference: "RFC 8415 — DHCPv6 Message Exchange"
    },
    {
      id: "q36",
      type: "multiple_choice",
      question: "a message that is used to suggest a lease to a client",
      options: ["DHCPREQUEST", "DHCPACK", "DHCPDISCOVER", "DHCPOFFER"],
      correctAnswer: 3,
      explanation: "After receiving DHCPDISCOVER, a DHCPv4 server sends DHCPOFFER to propose an IP address and associated configuration. The client can then send DHCPREQUEST, and the server confirms with DHCPACK.",
      reference: "RFC 2131 — DHCPOFFER"
    },
    {
      id: "q37",
      type: "multiple_choice",
      question: "What is an advantage of configuring a Cisco router as a relay agent?",
      options: [
        "It reduces the response time from a DHCP server.",
        "It can forward both broadcast and multicast messages on behalf of clients.",
        "It can provide relay services for multiple UDP services.",
        "It will allow DHCPDISCOVER messages to pass without alteration."
      ],
      correctAnswer: 2,
      explanation: "Cisco's 'ip helper-address' relay mechanism can forward selected UDP broadcast-based services to a designated server. DHCP is a common use, but the helper feature supports multiple UDP services. A relay may modify DHCP message fields such as giaddr, so it does not necessarily forward a DHCPDISCOVER without alteration.",
      reference: "Cisco IOS — IP Helper Address and UDP Forwarding"
    },
    {
      id: "q38",
      type: "true_false",
      question: "The A flag signifies that additional information is available from a stateless DHCPv6 server",
      correctAnswer: false,
      explanation: "The A flag means autonomous IPv6 address configuration through SLAAC is permitted for a prefix. The O flag indicates that additional configuration information can be obtained through DHCPv6. Therefore, the statement confuses the A and O flags.",
      reference: "RFC 4861 — Router Advertisement Flags"
    },
    {
      id: "q39",
      type: "multiple_choice",
      question: "Which protocol automates assignment of IP addresses on a network, and which port number does it use?",
      options: ["53", "67", "DNS", "SMB"],
      correctAnswer: 1,
      explanation: "DHCP is the protocol responsible for automatic IP address configuration. DHCPv4 servers listen on UDP port 67, and clients use UDP port 68. Because DHCP itself is not a selectable option, 67 is the intended answer to the port-number portion of the question.",
      reference: "RFC 2131 — DHCPv4 UDP Ports"
    },
    {
      id: "q40",
      type: "multiple_choice",
      question: "Refer to the exhibit. A network engineer is troubleshooting host connectivity on a LAN that uses a first hop redundancy protocol. Which IPv4 gateway address should be configured on the host?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-fa2-q40.png",
      options: ["192.168.2.100", "192.168.2.0", "192.168.2.2", "192.168.2.1"],
      correctAnswer: 0,
      explanation: "The exhibit shows an active and standby GLBP configuration, with virtual IP address 192.168.2.100. Hosts must configure the virtual IP as their default gateway, rather than a physical router's IP address. First-hop redundancy allows gateway availability even when a member router changes operational state.",
      reference: "Cisco — Gateway Load Balancing Protocol (GLBP)"
    }
  ]
});
