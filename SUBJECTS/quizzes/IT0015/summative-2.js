
window.PandoraQuizzes.register({
  id: "IT0015-M05-S02",
  subject: "IT0015",
  module: 5,
  title: "Summative Assessment 2",
  kind: "summative",
  version: 1,
  description: "50-item assessment on STP, RSTP, EtherChannel, DHCPv4, DHCPv6, SLAAC, and first-hop redundancy. Covers Modules 4–5.",
  createdAt: "2026-11-08T22:06:02+08:00",
  showOnHome: true,
  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Which one is a component of a bridge ID?",
      options: [
        "extended system ID",
        "bridge priority",
        "IP address",
        "port ID"
      ],
      correctAnswer: 1,
      explanation: "A spanning-tree Bridge ID identifies a switch for root bridge election. It contains a bridge priority field and a MAC address. When the extended system ID is used, the priority field includes the configured priority and an extended system ID, commonly the VLAN number. Bridge priority is a valid answer, although extended system ID is also technically part of the modern Bridge ID structure. IP addresses and individual port IDs are not components of the Bridge ID.",
      reference: "Cisco — STP Bridge ID, Priority, and Extended System ID"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "Your switch has a port status LED that is alternating between green and amber. What could this indicate?",
      options: [
        "The port is shut down.",
        "The port is experiencing errors.",
        "Nothing; this is normal!",
        "The port is in STP blocking mode."
      ],
      correctAnswer: 1,
      explanation: "On many Cisco Catalyst models, an alternating green and amber port LED indicates a link problem or error condition. LED behavior varies by switch model and operating mode, so the device's hardware guide should be consulted. A disabled port generally has a different LED indication.",
      reference: "Cisco Catalyst Switch Hardware Guides — Port Status LEDs"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "What is a drawback to turning spanning tree off and having multiple paths through the Layer 2 switch network?",
      options: [
        "The MAC address table becomes unstable.",
        "Port security becomes unstable.",
        "The switch acts like a hub.",
        "Port security shuts down all of the ports that have attached devices."
      ],
      correctAnswer: 0,
      explanation: "Without STP, redundant Layer 2 paths may create switching loops. The same source MAC address can then be learned repeatedly on different ports, causing MAC address flapping and unstable forwarding tables. Broadcast storms and duplicate frames can also result.",
      reference: "Cisco CCNA — Spanning Tree Protocol and Layer 2 Loops"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "A network administrator is configuring an EtherChannel link between switches SW1 and SW2 by using the command SW1(config-if-range)# channel-group 1 mode auto. Which command must be used on SW2 to enable this EtherChannel?",
      options: [
        "SW2(config-if-range)# channel-group 1 mode passive",
        "SW2(config-if-range)# channel-group 1 mode on",
        "SW2(config-if-range)# channel-group 1 mode desirable",
        "SW2(config-if-range)# channel-group 1 mode active"
      ],
      correctAnswer: 2,
      explanation: "The 'auto' setting belongs to PAgP and waits for a partner to initiate negotiation. The other switch must use PAgP 'desirable', which actively initiates formation of the EtherChannel. 'Passive' and 'active' are LACP modes, whereas 'on' creates a static EtherChannel without negotiation.",
      reference: "Cisco — EtherChannel PAgP Negotiation Modes"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "When the show spanning-tree vlan 33 command is issued on a switch, three ports are shown in the forwarding state. In which port role could these interfaces function while in the forwarding state?",
      options: ["blocked", "alternate", "designated", "disabled"],
      correctAnswer: 2,
      explanation: "A designated STP port forwards frames on its network segment and participates in the active spanning-tree topology. Alternate, blocked, and disabled ports do not perform normal data forwarding. Root ports can also forward, but 'root' is not among the listed choices.",
      reference: "Cisco — STP Port Roles and Port States"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "A switch is configured to run STP. What term describes the reference point for all path calculations?",
      options: ["disabled", "root port", "designated port", "root bridge"],
      correctAnswer: 3,
      explanation: "STP elects one root bridge as the reference point for determining the loop-free topology. Other switches calculate their lowest-cost paths toward that bridge and select appropriate root and designated ports.",
      reference: "IEEE 802.1D; Cisco — Root Bridge Election"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "What one is a requirement to be able to configure an EtherChannel between two switches?",
      options: [
        "Different allowed ranges of VLANs must exist on each end.",
        "All interfaces need to be assigned to different VLANs.",
        "All the interfaces need to be working in the same duplex mode.",
        "The interfaces that are involved need to be contiguous on the switch."
      ],
      correctAnswer: 2,
      explanation: "EtherChannel member ports must have compatible characteristics such as speed, duplex, and Layer 2 configuration. The interfaces need not be physically consecutive, while inconsistent VLAN or trunk settings can prevent successful bundling.",
      reference: "Cisco — EtherChannel Configuration Requirements"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Which one parameter must match on the ports of two switches to create a PAgP EtherChannel between the switches?",
      options: ["VLAN information", "port ID", "PAgP mode", "MAC address"],
      correctAnswer: 0,
      explanation: "The physical interfaces forming an EtherChannel must use compatible VLAN and switching configurations. PAgP modes need to be compatible rather than identical: for example, auto and desirable work together. Port IDs and MAC addresses need not match.",
      reference: "Cisco — PAgP EtherChannel Compatibility"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Refer to the exhibit. Which switching technology would allow each access layer switch link to be aggregated to provide more bandwidth between each Layer 2 switch and the Layer 3 switch?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-s2-q9.png",
      options: ["PortFast", "EtherChannel", "trunking", "HSRP"],
      correctAnswer: 1,
      explanation: "EtherChannel combines multiple physical connections into one logical link to increase aggregated bandwidth and provide link redundancy. PortFast concerns faster transition of edge ports, trunking carries multiple VLANs, and HSRP supplies first-hop gateway redundancy. None of those alternatives bundles links.",
      reference: "Cisco — EtherChannel Link Aggregation"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "In which port state does a switch learn MAC addresses and process BPDUs in a PVST network?",
      options: ["blocking", "disabled", "listening", "learning"],
      correctAnswer: 3,
      explanation: "In the STP learning state, a port processes BPDUs and learns source MAC addresses, but it does not yet forward ordinary user data frames. A listening port processes BPDUs without learning MAC addresses. Once the port reaches forwarding, it learns addresses and forwards traffic.",
      reference: "Cisco — IEEE 802.1D STP Port States"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "What is a characteristic of spanning tree?",
      options: [
        "It prevents propagation of Layer 2 broadcast frames.",
        "It is enabled by default on Cisco switches.",
        "It is used to discover information about an adjacent Cisco device.",
        "It has a TTL mechanism that works at Layer 2."
      ],
      correctAnswer: 1,
      explanation: "STP is enabled by default on many traditional Cisco Catalyst switch configurations. Its purpose is to prevent Layer 2 loops by blocking selected redundant paths. It does not block all broadcasts, does not discover adjacent devices like CDP, and does not add a TTL field to Ethernet frames.",
      reference: "Cisco CCNA — Spanning Tree Protocol"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "A switch is configured to run STP. What term describes the reference point for all path calculations?",
      options: ["designated port", "root port", "alternate port", "root bridge"],
      correctAnswer: 3,
      explanation: "The root bridge is the central reference for STP path calculations. Switches calculate their path cost to the root, which determines root-port and designated-port selections and helps maintain a loop-free topology.",
      reference: "Cisco — STP Root Bridge"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "A switch is configured to run STP. What term describes a field used to specify a VLAN ID?",
      options: ["bridge priority", "MAC Address", "extended system ID", "port ID"],
      correctAnswer: 2,
      explanation: "In modern STP Bridge IDs, the extended system ID commonly represents the VLAN ID. It occupies part of the 16-bit priority field, allowing a different Bridge ID to be associated with each VLAN.",
      reference: "Cisco — STP Extended System ID"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "What is the value used to determine which port on a non-root bridge will become a root port in a STP network?",
      options: [
        "the highest MAC address of all the ports in the switch",
        "the path cost",
        "the VTP revision number",
        "the lowest MAC address of all the ports in the switch"
      ],
      correctAnswer: 1,
      explanation: "A non-root switch selects the port offering the lowest total path cost toward the root bridge as its root port. Tie-breaking uses additional BPDU information, such as sender Bridge ID and Port ID. VTP revision numbers are unrelated to root-port selection.",
      reference: "Cisco — STP Root Port Election and Path Cost"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "A network administrator configured an EtherChannel link with three interfaces between two switches. What is the result if one of the three interfaces is down?",
      options: [
        "The remaining two interfaces become separate links between the two switches.",
        "The EtherChannel fails.",
        "The remaining two interfaces continue to load balance traffic.",
        "One interface becomes an active link for data traffic and the other becomes a backup link."
      ],
      correctAnswer: 2,
      explanation: "An EtherChannel can keep forwarding traffic using its remaining active member links when one physical member fails, provided the minimum-link requirements are still satisfied. The bundle remains one logical connection, and eligible traffic is distributed across the surviving links.",
      reference: "Cisco — EtherChannel Redundancy and Load Balancing"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "Refer to the exhibit. While troubleshooting a switch, you executed the “show interface port-channel 1 etherchannel” command and it returned this output. Which information is provided by the Load value?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-s2-q16.png",
      options: [
        "the percentage of use of the link",
        "the session count of the link",
        "the number source-destination pairs on the link",
        "the preference of the link"
      ],
      correctAnswer: 2,
      explanation: "The EtherChannel 'Load' field describes the distribution of hashing results used to select member links. It indicates how source/destination combinations are mapped among links rather than measuring real-time bandwidth utilization or session count. The accompanying 'No of bits' field reflects the number of hash buckets assigned to each link.",
      reference: "Cisco — EtherChannel Load Balancing and Hash Distribution"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "Which Cisco command will initiate EtherChannel interface configuration mode?",
      options: [
        "#interface port-channel interface-identifier",
        "#interface range interface-identifier",
        "#interface interface-identifier",
        "#channel-group group-identifier"
      ],
      correctAnswer: 0,
      explanation: "The 'interface port-channel' command enters configuration mode for the logical Port-channel interface. The 'interface range' command selects physical interfaces, while 'channel-group' assigns physical interfaces to a channel group. The # prefixes shown in the quiz are prompt representations, not characters typed as part of the command.",
      reference: "Cisco IOS — interface port-channel Command"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "Rapid PVST+ is __________.",
      options: [
        "An evolution of STP that provides faster convergence",
        "A protocol that allows multiple VLANs to run in a single spanning-tree instance",
        "A Cisco enhancement of RSTP to provide a spanning-tree instance for each VLAN",
        "The legacy standard for STP that runs all VLANs in a single spanning-tree instance."
      ],
      correctAnswer: 2,
      explanation: "Rapid PVST+ is Cisco's per-VLAN implementation of Rapid Spanning Tree Protocol. It provides a separate rapid spanning-tree instance for each VLAN. RSTP itself improves convergence compared with traditional STP, but the per-VLAN implementation is the distinction asked here.",
      reference: "Cisco — Rapid PVST+ and RSTP"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "What is the outcome of a Layer 2 broadcast storm?",
      options: [
        "Routers will take over the forwarding of frames as switches become congested.",
        "New traffic is discarded by the switch because it is unable to be processed.",
        "ARP broadcast requests are returned to the transmitting host.",
        "CSMA/CD will cause each host to continue transmitting frames."
      ],
      correctAnswer: 1,
      explanation: "A broadcast storm can saturate switch bandwidth and processing capacity. As congestion increases, the switch may discard new frames because its resources are exhausted. Routers do not automatically take over switching, and CSMA/CD is not a solution to Layer 2 loops.",
      reference: "Cisco CCNA — Broadcast Storms and Layer 2 Loops"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "What is the status of port-channel if LACP is misconfigured?",
      options: ["Errdisabled", "Disabled", "Forwarding", "Enabled"],
      correctAnswer: 0,
      explanation: "A serious EtherChannel configuration inconsistency can cause a switch to place an affected port or interface into an error-disabled state as a protective measure. However, not every LACP mismatch produces err-disable; some mismatches simply prevent aggregation or leave links operating individually. Errdisabled is the intended answer among the choices.",
      reference: "Cisco — EtherChannel Misconfiguration and Errdisable"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "Which statement describes a characteristic of EtherChannel?",
      options: [
        "It can bundle mixed types of 100 Mb/s and 1Gb/s Ethernet links.",
        "It is made by combining multiple physical links that are seen as one link between two switches.",
        "It can combine up to a maximum of 4 physical links.",
        "It consists of multiple parallel links between a switch and a router."
      ],
      correctAnswer: 1,
      explanation: "EtherChannel combines several compatible physical Ethernet connections into a single logical link. Member links generally need matching operational characteristics such as speed and duplex. It is not universally limited to four links and can be used in different supported device topologies.",
      reference: "Cisco — EtherChannel Overview"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "Which protocol is a link aggregation protocol?",
      options: ["RSTP", "PAgP", "STP", "EtherChannel"],
      correctAnswer: 1,
      explanation: "Port Aggregation Protocol (PAgP) is Cisco's protocol for negotiating EtherChannel bundles. LACP is another link aggregation negotiation protocol, although it is not listed. EtherChannel names the link aggregation technology rather than a negotiation protocol.",
      reference: "Cisco — PAgP and EtherChannel"
    },
    {
      id: "q23",
      type: "multiple_choice",
      question: "A trunk link between two switches has reached its capacity. How can this be addressed in the most economical way?",
      options: [
        "Decrease the size of inter-switch collision domain by configuring additional VLANs",
        "Increase the speed of the ports",
        "Combine physical ports into a high-speed logical link by configuring the EtherChannel",
        "Create additional broadcast domains by inserting a router between the switches"
      ],
      correctAnswer: 2,
      explanation: "EtherChannel can increase the aggregate capacity of an inter-switch connection by bundling existing compatible physical interfaces. This may be less expensive than replacing switches or network equipment with faster interfaces. VLANs and broadcast-domain changes do not increase the trunk's raw bandwidth.",
      reference: "Cisco CCNA — EtherChannel Benefits"
    },
    {
      id: "q24",
      type: "multiple_choice",
      question: "Refer to the exhibit. What are the possible port roles for ports A, B, C, and D in this RSTP-enabled network?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-s2-q24.png",
      options: [
        "alternate, designated, root, root",
        "alternate, root, designated, root",
        "designated, root, alternate, root",
        "designated, alternate, root, root"
      ],
      correctAnswer: 0,
      explanation: "S1 is the root bridge, so its relevant ports are designated ports, including B. The direct links from S2 and S3 toward S1 function as their root paths, giving C and D root-port roles. The redundant link toward S3 can leave port A as an alternate port on S2, avoiding a loop. The diagram asks for possible roles and assumes suitable relative path costs and bridge IDs.",
      reference: "Cisco — RSTP Root, Designated, and Alternate Port Roles"
    },
    {
      id: "q25",
      type: "multiple_choice",
      question: "When a range of ports is being configured for EtherChannel, which mode will configure LACP so that it initiates the EtherChannel negotiation?",
      options: ["Desirable", "Active", "Auto", "Passive"],
      correctAnswer: 1,
      explanation: "LACP active mode initiates aggregation negotiation by sending LACP messages. Passive mode waits for an active partner. Desirable and auto belong to Cisco's PAgP protocol, not LACP.",
      reference: "Cisco — LACP Active and Passive Modes"
    },
    {
      id: "q26",
      type: "multiple_choice",
      question: "Which message does an IPv4 host use to reply when it receives a DHCPOFFER message from a DHCP server?",
      options: ["DHCPACK", "DHCPREQUEST", "DHCPOFFER", "DHCPDISCOVER"],
      correctAnswer: 1,
      explanation: "The DHCPv4 client responds to an offer with DHCPREQUEST, indicating the server and offered configuration it wishes to use. The server then acknowledges with DHCPACK. The usual initial sequence is Discover, Offer, Request, Acknowledge.",
      reference: "RFC 2131 — DHCPv4 DORA"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "Which command will allow a network administrator to check the IP address that is assigned to a particular MAC address?",
      options: [
        "Router# show ip dhcp binding",
        "Router# show ip dhcp server statistics",
        "Router# show running-config | section_dhcp",
        "Router# show ip dhcp pool"
      ],
      correctAnswer: 0,
      explanation: "The 'show ip dhcp binding' command displays DHCP lease bindings, including assigned IP addresses and client identifiers or hardware addresses. Pool commands describe pool capacity, while DHCP statistics summarize protocol activity.",
      reference: "Cisco IOS — show ip dhcp binding"
    },
    {
      id: "q28",
      type: "true_false",
      question: "To verify a Stateless DHCPv6 Client Router receiver other necessary DHCPv6 information, using The show ipv6 dhcp interface-type interface-number command in global configuration mode of the Client Router.",
      correctAnswer: false,
      explanation: "Verification commands beginning with 'show' are normally entered in privileged EXEC mode rather than global configuration mode. This makes the statement false even though a DHCPv6 status or interface command can be used for verification.",
      reference: "Cisco IOS — DHCPv6 Verification Commands and CLI Modes"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "When a client is requesting an initial address lease from a DHCP server, why is the DHCPREQUEST message sent as a broadcast?",
      options: [
        "The client does not yet know the IP address of the DHCP server that sent the offer.",
        "The DHCP server may be on a different subnet, so the request must be sent as a broadcast.",
        "The client may have received offers from multiple servers, and the broadcast serves to implicitly decline those other offers.",
        "The client does not have a MAC address assigned yet, so it cannot send a unicast message at Layer 2."
      ],
      correctAnswer: 2,
      explanation: "During initial DHCP address selection, the client broadcasts DHCPREQUEST to indicate which offer it accepts. Other DHCP servers that made offers receive the message and know their offers were not selected, so they can release those tentative reservations. The client already has a MAC address; this is not the reason for broadcasting.",
      reference: "RFC 2131 — DHCPREQUEST in SELECTING State"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "A company uses DHCP to manage IP address deployment for employee workstations. The IT department deploys multiple DHCP servers in the data center and uses DHCP relay agents to facilitate the DHCP requests from workstations. Which one UDP port is used to forward DHCP traffic?",
      options: ["23", "53", "80", "67"],
      correctAnswer: 3,
      explanation: "DHCPv4 servers listen on UDP port 67, while DHCP clients use UDP port 68. A DHCP relay agent forwards client DHCP messages to a server using UDP port 67. Port 53 is associated with DNS, port 23 with Telnet, and port 80 with HTTP.",
      reference: "RFC 2131; RFC 2132 — DHCPv4 UDP Ports"
    },
    {
      id: "q31",
      type: "multiple_choice",
      question: "What is the result of a network technician issuing the command ip dhcp excluded-address 10.0.15.1 10.0.15.15 on a Cisco router?",
      options: [
        "The ip dhcp excluded-address command is followed by the first and the last addresses to be excluded from being leased to DHCP clients.",
        "The Cisco router will exclude 15 IP addresses from being leased to DHCP clients.",
        "The Cisco router will automatically create a DHCP pool using a /28 mask.",
        "The Cisco router will allow only the specified IP addresses to be leased to clients."
      ],
      correctAnswer: 1,
      explanation: "The excluded range includes both endpoints, from 10.0.15.1 through 10.0.15.15, so it contains 15 IPv4 addresses. Cisco's DHCP server will not dynamically offer those addresses from its pools. The command does not create a new pool or subnet mask. The first option also describes the syntax correctly, which makes this question somewhat ambiguous.",
      reference: "Cisco IOS — ip dhcp excluded-address"
    },
    {
      id: "q32",
      type: "true_false",
      question: "The O Flag signifies to use SLAAC to create an IPv6 Global Unicast Address.",
      correctAnswer: false,
      explanation: "The O, or Other Configuration, flag indicates that a host can obtain additional information, such as DNS settings, from DHCPv6. SLAAC address formation depends on Router Advertisements and their advertised prefixes and autonomous-address-configuration flag, not on the O flag alone.",
      reference: "RFC 4861; Cisco — IPv6 RA M and O Flags"
    },
    {
      id: "q33",
      type: "multiple_choice",
      question: "What is one indication that a Windows computer did not receive an IPv4 address from a DHCP server?",
      options: [
        "The computer cannot ping 127.0.0.1.",
        "Windows displays a DHCP timeout message.",
        "The computer receives an IP address that starts with 169.254.",
        "The computer cannot ping other devices on the same network with IP addresses in the 169.254.0.0/16 range."
      ],
      correctAnswer: 2,
      explanation: "When Windows cannot obtain a DHCP lease and automatic private addressing is enabled, it can self-assign a link-local IPv4 address in the 169.254.0.0/16 range, called APIPA. Hosts with valid APIPA addresses on the same local segment may still communicate. Loopback address 127.0.0.1 is unrelated to DHCP success, and no particular timeout message is guaranteed.",
      reference: "RFC 3927 — IPv4 Link-Local Addressing; Microsoft — APIPA"
    },
    {
      id: "q34",
      type: "multiple_choice",
      question: "Refer to the exhibit. What should be done to allow PC-A to receive an IPv6 address from the DHCPv6 server?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-s2-q34.png",
      options: [
        "Change the ipv6 nd managed-config-flag command to ipv6 nd other-config-flag.",
        "Configure the ipv6 nd managed-config-flag command on interface Fa0/1.",
        "Add the ipv6 dhcp relay command to interface Fa0/0.",
        "Add the IPv6 address 2001:DB8:1234:5678::10/64 to the interface configuration of the DHCPv6 server."
      ],
      correctAnswer: 2,
      explanation: "PC-A and the DHCPv6 server are on different IPv6 networks. R1 already advertises the managed configuration flag on the client-facing Fa0/0 interface, telling PC-A to use stateful DHCPv6. A DHCPv6 relay must forward the client's requests to the server across the router. The relay configuration belongs on the client-facing interface in this topology; changing the flag to the O flag would not solve address allocation.",
      reference: "Cisco — DHCPv6 Relay Agent Configuration; Stateful DHCPv6"
    },
    {
      id: "q35",
      type: "multiple_choice",
      question: "Which is a DHCPv4 address allocation method that assigns IPv4 addresses for a limited lease period?",
      options: [
        "dynamic allocation",
        "manual allocation",
        "pre-allocation",
        "automatic allocation"
      ],
      correctAnswer: 0,
      explanation: "Dynamic allocation leases an IPv4 address to a client for a limited period and can later renew or reassign it. Automatic allocation generally assigns an address persistently, while manual allocation maps an address to a specific client.",
      reference: "RFC 2131 — DHCP Address Allocation Mechanisms"
    },
    {
      id: "q36",
      type: "multiple_choice",
      question: "A company implements the stateless DHCPv6 method for configuring IPv6 addresses on employee workstations. After a workstation receives messages from multiple DHCPv6 servers to indicate their availability for DHCPv6 service, which message does it send to a server for configuration information?",
      options: [
        "DHCPv6 ADVERTISE",
        "DHCPv6 INFORMATION-REQUEST",
        "DHCPv6 REQUEST",
        "DHCPv6 SOLICIT"
      ],
      correctAnswer: 1,
      explanation: "In stateless DHCPv6, the host generates its IPv6 address independently, typically through SLAAC, and uses DHCPv6 INFORMATION-REQUEST to obtain additional parameters such as DNS server details. The question's reference to receiving multiple server availability messages mixes in stateful DHCPv6 terminology, but INFORMATION-REQUEST is the intended stateless DHCPv6 client message.",
      reference: "RFC 8415 — DHCPv6 Information-Request"
    },
    {
      id: "q37",
      type: "true_false",
      question: "To verify a Stateless DHCPv6 Client Router receiver other necessary DHCPv6 information, using The show ipv6 dhcp interface-type interface-number command in global configuration mode of the Server Router.",
      correctAnswer: false,
      explanation: "A Cisco 'show' command is a verification command executed in privileged EXEC mode, not global configuration mode. In addition, verifying a client's acquired DHCPv6 information should be done on the relevant client or by inspecting corresponding server-side bindings and statistics, not by assuming a client-interface command runs on the server.",
      reference: "Cisco IOS — DHCPv6 Verification and Command Modes"
    },
    {
      id: "q38",
      type: "multiple_choice",
      question: "Which DHCP IPv4 message contains the following information?\n\nDestination address: 255.255.255.255\nClient IPv4 address: 0.0.0.0\nDefault gateway address: 0.0.0.0\nSubnet mask: 0.0.0.0",
      options: ["DHCPOFFER", "DHCPACK", "DHCPDISCOVER", "DHCPREQUEST"],
      correctAnswer: 2,
      explanation: "An unconfigured DHCPv4 client broadcasts DHCPDISCOVER using source address 0.0.0.0 and destination address 255.255.255.255. It has not yet obtained a subnet mask or default gateway. The usual initial exchange is Discover, Offer, Request, Acknowledge. A DHCPREQUEST can also be broadcast in some states, but DHCPDISCOVER best matches initial discovery.",
      reference: "RFC 2131 — DHCPDISCOVER"
    },
    {
      id: "q39",
      type: "true_false",
      question: "SLAAC is a service which means there is a server that maintains network address information to know which IPv6 addresses are being used and which ones are available.",
      correctAnswer: false,
      explanation: "SLAAC is stateless address autoconfiguration: an IPv6 host builds its own address using Router Advertisement information without a stateful server tracking and allocating each address. Duplicate Address Detection helps discover conflicting addresses. A centralized allocation database is associated with stateful address management, not SLAAC.",
      reference: "RFC 4862 — IPv6 Stateless Address Autoconfiguration"
    },
    {
      id: "q40",
      type: "multiple_choice",
      question: "a message that is used to acknowledge that the lease is successful",
      options: ["DHCPREQUEST", "DHCPOFFER", "DHCPACK", "DHCPDISCOVER"],
      correctAnswer: 2,
      explanation: "DHCPACK is sent by a DHCPv4 server to acknowledge the client's request and confirm the assigned lease parameters. In the DORA exchange, it follows DHCPREQUEST and completes the initial address assignment.",
      reference: "RFC 2131 — DHCPACK"
    },
    {
      id: "q41",
      type: "true_false",
      question: "The A flag signifies to use a stateful DHCPv6 server to obtain an IPv6 Global Unicast Address.",
      correctAnswer: false,
      explanation: "The A flag in a Router Advertisement Prefix Information Option indicates that a prefix can be used for autonomous address configuration through SLAAC. The managed-address M flag is the signal to obtain an address using stateful DHCPv6. Therefore, the A flag does not itself direct the host to use stateful DHCPv6.",
      reference: "RFC 4861; RFC 4862 — Autonomous Address Configuration Flag"
    },
    {
      id: "q42",
      type: "multiple_choice",
      question: "a message that is used to locate any available DHCP server on a network",
      options: ["DHCPDISCOVER", "DHCPREQUEST", "DHCPOFFER", "DHCPACK"],
      correctAnswer: 0,
      explanation: "DHCPDISCOVER is broadcast by a DHCPv4 client to locate available DHCP servers. Servers answer with DHCPOFFER, after which the client sends DHCPREQUEST and the selected server confirms with DHCPACK.",
      reference: "RFC 2131 — DHCPDISCOVER"
    },
    {
      id: "q43",
      type: "true_false",
      question: "The second step in configuring a stateless DHCPv6 is to enable ipv6 unicast-routing command.",
      correctAnswer: false,
      explanation: "In the common Cisco CCNA router configuration sequence, enabling 'ipv6 unicast-routing' is an initial prerequisite before configuring interfaces, Router Advertisements, and DHCPv6 pools. Therefore, describing it as the second step in that prescribed sequence is incorrect. Actual command order may depend on the starting configuration.",
      reference: "Cisco CCNA — Stateless DHCPv6 Configuration"
    },
    {
      id: "q44",
      type: "multiple_choice",
      question: "The address pool of a DHCP server is configured with 172.23.143.0/26. The network administrator reserves 14 IP addresses for file servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      options: ["58", "61", "50", "48"],
      correctAnswer: 3,
      explanation: "A /26 network has 2^(32−26) = 64 total addresses. Subtract the network and broadcast addresses, leaving 62 usable host addresses. After reserving 14 addresses for servers, 62 − 14 = 48 addresses remain for other hosts.",
      reference: "IPv4 Subnetting — /26 Host Address Calculation"
    },
    {
      id: "q45",
      type: "multiple_choice",
      question: "Refer to the exhibit. Which destination MAC address is used when frames are sent from the workstation to the default gateway?",
      image: "./SUBJECTS/quizzes/IT0015/imgs/it0015-s2-q45.png",
      options: [
        "MAC addresses of both the forwarding and standby routers",
        "MAC address of the forwarding router",
        "MAC address of the standby router",
        "MAC address of the virtual router"
      ],
      correctAnswer: 3,
      explanation: "In a first-hop redundancy protocol such as HSRP, hosts use a virtual default-gateway IP address. ARP resolution returns the virtual gateway's MAC address, so Ethernet frames addressed to the default gateway use that virtual MAC rather than the individual physical MAC of the forwarding or standby router. The active router handles forwarding for the virtual gateway.",
      reference: "Cisco — HSRP Virtual IP and Virtual MAC Address"
    },
    {
      id: "q46",
      type: "multiple_choice",
      question: "The address pool of a DHCP server is configured with 10.19.44.0/24. The network administrator reserves 6 IP addresses for servers. How many IP addresses are left in the pool to be assigned to other hosts?",
      options: ["238", "252", "246", "248"],
      correctAnswer: 3,
      explanation: "A /24 subnet contains 256 total addresses. Removing its network and broadcast addresses leaves 254 usable host addresses. Reserving 6 addresses gives 254 − 6 = 248 addresses available for other hosts.",
      reference: "IPv4 Subnetting — /24 Host Address Calculation"
    },
    {
      id: "q47",
      type: "multiple_choice",
      question: "Identify which message type to the order of the stateful DHCPv6 process when a client first connects to an IPv6 network. DHCPv6 Request",
      options: ["Step 4", "Step 3", "Step 3", "Step 2"],
      correctAnswer: 1,
      explanation: "The initial four-message stateful DHCPv6 exchange is SOLICIT, ADVERTISE, REQUEST, and REPLY. REQUEST is the third message, sent by the client to ask a selected server for configuration. The PDF repeats 'Step 3' twice as separate choices; both are conceptually correct, so the question is defective as a single-answer item. The selected second option is retained as the key.",
      reference: "RFC 8415 — Stateful DHCPv6 Message Exchange"
    },
    {
      id: "q48",
      type: "multiple_choice",
      question: "The address pool of a DHCP server is configured with 192.168.184.0/26. The network administrator reserves 18 IP addresses for access points. How many IP addresses are left in the pool to be assigned to other hosts?",
      options: ["54", "44", "57", "46"],
      correctAnswer: 1,
      explanation: "A /26 subnet provides 64 total IPv4 addresses, of which 62 are normally usable by hosts after excluding network and broadcast addresses. Reserving 18 usable addresses for access points leaves 62 − 18 = 44 addresses.",
      reference: "IPv4 Subnetting — /26 Host Address Calculation"
    },
    {
      id: "q49",
      type: "multiple_choice",
      question: "Which protocol automates assignment of IP addresses on a network, and which port number does it use?",
      options: ["DNS", "SMB", "DHCP", "BGP"],
      correctAnswer: 2,
      explanation: "Dynamic Host Configuration Protocol (DHCP) automatically provides IP configuration to clients. DHCPv4 servers use UDP port 67, while clients use UDP port 68. The question asks for a port number, but every listed answer is a protocol, not a number. DHCP is therefore the intended protocol answer, with UDP 67 and 68 supplying the missing port information.",
      reference: "RFC 2131 — Dynamic Host Configuration Protocol; UDP Ports 67 and 68"
    },
    {
      id: "q50",
      type: "true_false",
      question: "A router that provides DHCPv6 forwarding services is a DHCP server.",
      correctAnswer: false,
      explanation: "A router configured as a DHCPv6 relay agent forwards DHCPv6 requests and replies between clients and a separate DHCPv6 server. Relaying DHCPv6 messages does not make the router the server allocating the addresses or supplying the configuration.",
      reference: "Cisco — DHCPv6 Relay Agent and DHCPv6 Server"
    }
  ]
});
