
window.PandoraQuizzes.register({
  id: "IT0035-M02-MIDTERM",
  subject: "IT0035",
  module: 2,
  title: "Midterm Examination",
  kind: "summative",
  version: 1,
  description: "45-question midterm examination covering operating systems, distributed systems, process management, and CPU scheduling. Original score: 58/60.",
  createdAt: "2026-11-07T02:28:19+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "__________ is a program that acts as an interface or intermediary between the computer user and computer hardware",
      options: ["Application Software", "Java", "Driver", "Operating System"],
      correctAnswer: 3,
      explanation: "An operating system provides an interface between users, applications, and computer hardware while managing the computer's resources.",
      reference: "IT0035 Module 1 — Introduction to Operating Systems"
    },
    {
      id: "q2",
      type: "true_false",
      question: "Windows 10 is an example of hand-held operating system.",
      correctAnswer: false,
      explanation: "Windows 10 is primarily a desktop and laptop operating system. Handheld operating systems include Android and iOS.",
      reference: "IT0035 Module 1 — Types of Operating Systems"
    },
    {
      id: "q3",
      type: "true_false",
      question: "The user of a Batch Operating System has direct interaction with the computer.",
      correctAnswer: false,
      explanation: "Traditional batch operating systems execute submitted jobs without direct user interaction while those jobs run.",
      reference: "IT0035 Module 1 — Batch Operating Systems"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Refers to computing on handheld smartphones and tablet computers",
      options: ["Desktop", "Mobile", "Calculator", "Cloud"],
      correctAnswer: 1,
      explanation: "Mobile computing involves portable devices such as smartphones and tablets that can perform computing tasks while being carried.",
      reference: "IT0035 Module 1 — Mobile Computing"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "It is the central part of an OS which manages system resources and is always resident in memory.",
      options: ["IOS", "BIOS", "Bootloader", "Kernel"],
      correctAnswer: 3,
      explanation: "The kernel is the central operating-system component responsible for managing core resources, including CPU time, memory, and I/O devices.",
      reference: "IT0035 Module 1 — Operating System Kernel"
    },
    {
      id: "q6",
      type: "true_false",
      question: "Cloud computing is an example of distributed system",
      correctAnswer: true,
      explanation: "Cloud computing commonly uses multiple connected computers and distributed resources to deliver services over a network.",
      reference: "IT0035 Module 1 — Distributed Systems and Cloud Computing"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "Distributed systems use ______ central processors to serve multiple real-time applications and multiple users.",
      options: ["zero", "single", "multiple", "dual"],
      correctAnswer: 2,
      explanation: "Distributed systems use multiple networked computing nodes or processors to provide services and share workloads.",
      reference: "IT0035 Module 1 — Distributed Operating Systems"
    },
    {
      id: "q8",
      type: "true_false",
      question: "Distributed system is also known as loosely coupled system.",
      correctAnswer: true,
      explanation: "Distributed computers are traditionally described as loosely coupled because they are independent systems connected through a communication network.",
      reference: "IT0035 Module 1 — Distributed Systems"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "A visual way of interacting with a computer using items such as windows, icons, and menus, used by most modern operating systems.",
      options: [
        "Command Line Interface",
        "Batch-Based OS",
        "Menu-based Interface",
        "Graphical User Interface"
      ],
      correctAnswer: 3,
      explanation: "A graphical user interface (GUI) lets users interact with software through visual elements such as windows, icons, menus, and buttons.",
      reference: "IT0035 Module 1 — Operating System User Interfaces"
    },
    {
      id: "q10",
      type: "true_false",
      question: "Real-time systems are used when there are time requirements or constraints like missile systems.",
      correctAnswer: true,
      explanation: "Real-time systems are designed to satisfy timing constraints and deadlines. Certain missile-control systems are examples of applications requiring timely responses.",
      reference: "IT0035 Module 1 — Real-Time Operating Systems"
    },
    {
      id: "q11",
      type: "true_false",
      question: "In Asymmetric multiprocessing, all processors are considered peers.",
      correctAnswer: false,
      explanation: "Asymmetric multiprocessing assigns different roles to processors, often using a master-worker arrangement. Peer processors characterize symmetric multiprocessing.",
      reference: "IT0035 Module 1 — Multiprocessing"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "An operating system that provides services across the network.",
      options: [
        "Virtual Computing",
        "Cloud Computing",
        "Windows Server",
        "Android OS"
      ],
      correctAnswer: 2,
      explanation: "Windows Server is a server operating system that provides network services such as user management, file sharing, and resource access. It is an example of a network-oriented OS.",
      reference: "IT0035 Module 1 — Network Operating Systems"
    },
    {
      id: "q13",
      type: "true_false",
      question: "Infrastructure as a service is a type of cloud computing service in which servers or storage are available over the Internet.",
      correctAnswer: true,
      explanation: "Infrastructure as a Service (IaaS) provides computing infrastructure, including virtual machines, storage, and networking resources, through cloud services.",
      reference: "IT0035 Module 1 — Cloud Computing Service Models"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "A software-generated interrupt caused either by an error or a user request is called ____________________.",
      options: ["Trap", "System call", "Lost Interrupt", "Interrupt"],
      correctAnswer: 0,
      explanation: "A trap is a software-generated interrupt or exception, often associated with errors or requests for operating-system services.",
      reference: "IT0035 Module 1 — Interrupts and Traps"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "______ is a region of memory used to temporarily hold data while it is being moved from one place to another.",
      options: ["RAM", "Interrupt", "Disturb", "Buffer"],
      correctAnswer: 3,
      explanation: "A buffer is a memory region that temporarily holds data during transfers between devices, memory locations, or processes.",
      reference: "IT0035 Module 1 — Input/Output Buffering"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "Refers to computing on handheld smartphones and tablet computers.",
      options: [
        "Client-server",
        "Mobile Computing",
        "Cloud Computing",
        "Virtual Computing"
      ],
      correctAnswer: 1,
      explanation: "Mobile computing refers to computing performed with portable devices, including smartphones and tablets.",
      reference: "IT0035 Module 1 — Mobile Computing"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "______ operation allows OS to protect itself and other system components.",
      options: ["Zero mode", "Single mode", "Dual mode", "Quadruple mode"],
      correctAnswer: 2,
      explanation: "Dual-mode operation separates user mode from kernel mode, preventing ordinary applications from executing privileged instructions without authorization.",
      reference: "IT0035 Module 1 — Dual-Mode Operation"
    },
    {
      id: "q18",
      type: "true_false",
      question: "Google Apps and Dropbox are examples of SaaS.",
      correctAnswer: true,
      explanation: "Software as a Service delivers applications to users over a network. Google Workspace applications and Dropbox's cloud application services are examples.",
      reference: "IT0035 Module 1 — Software as a Service"
    },
    {
      id: "q19",
      type: "true_false",
      question: "Symmetric multiprocessing applies a boss-worker relationship among processors.",
      correctAnswer: false,
      explanation: "Symmetric multiprocessing treats processors as peers. A boss-worker or master-slave arrangement describes asymmetric multiprocessing.",
      reference: "IT0035 Module 1 — Symmetric and Asymmetric Multiprocessing"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "A __________ is a way for programs to interact with the OS.",
      options: ["User call", "Virus", "System Call", "Trap"],
      correctAnswer: 2,
      explanation: "System calls provide an interface through which programs request operating-system services such as file access, process management, and I/O.",
      reference: "IT0035 Module 1 — System Calls"
    },
    {
      id: "q21",
      type: "true_false",
      question: "A computer system consists of a collection of processes.",
      correctAnswer: true,
      explanation: "A running computer system contains system processes and user processes that execute operating-system and application code.",
      reference: "IT0035 Module 2 — Process Concept"
    },
    {
      id: "q22",
      type: "true_false",
      question: "CPU being switched from one process to another is called Context Switch.",
      correctAnswer: true,
      explanation: "A context switch saves the execution state of one process and restores the state of another so the CPU can switch between them.",
      reference: "IT0035 Module 2 — Context Switching"
    },
    {
      id: "q23",
      type: "true_false",
      question: "The short term scheduler selects process from among the processes that are ready to execute, and allocates the CPU to one of them.",
      correctAnswer: true,
      explanation: "The short-term scheduler, also called the CPU scheduler, chooses a ready process and allocates processor time to it.",
      reference: "IT0035 Module 2 — Types of Schedulers"
    },
    {
      id: "q24",
      type: "true_false",
      question: "In process, DATA section contains the global and dynamic variables.",
      correctAnswer: false,
      explanation: "The data section stores global and static variables. Dynamically allocated objects are normally stored in the heap.",
      reference: "IT0035 Module 2 — Process Memory Layout"
    },
    {
      id: "q25",
      type: "true_false",
      question: "In process state, ready state is when the process is waiting for some event to occur (such as an I/O completion).",
      correctAnswer: false,
      explanation: "Waiting for an event such as I/O completion is the waiting or blocked state. A ready process is waiting to receive CPU time.",
      reference: "IT0035 Module 2 — Process States"
    },
    {
      id: "q26",
      type: "true_false",
      question: "A process is an active entity.",
      correctAnswer: true,
      explanation: "A process is a program in execution and therefore an active entity, unlike a passive program stored on disk.",
      reference: "IT0035 Module 2 — Process Concept"
    },
    {
      id: "q27",
      type: "true_false",
      question: "Process execution begins with a I/O burst that is followed by an CPU burst.",
      correctAnswer: false,
      explanation: "In the introductory CPU-I/O burst model, a process begins with a CPU burst, followed by an I/O burst, and continues alternating between them.",
      reference: "IT0035 Module 2 — CPU-I/O Burst Cycle"
    },
    {
      id: "q28",
      type: "true_false",
      question: "The long term scheduler selects process from among the processes that are ready to execute, and allocates the CPU to one of them.",
      correctAnswer: false,
      explanation: "Selecting a ready process and allocating the CPU is the short-term scheduler's job. The long-term scheduler admits jobs into the system for execution.",
      reference: "IT0035 Module 2 — Long-Term and Short-Term Schedulers"
    },
    {
      id: "q29",
      type: "true_false",
      question: "The goal of CPU scheduling is to optimize system performance is to minimize the waiting time.",
      correctAnswer: true,
      explanation: "Reducing average waiting time is a major CPU scheduling objective, alongside improving turnaround time, response time, utilization, and throughput.",
      reference: "IT0035 Module 2 — CPU Scheduling Criteria"
    },
    {
      id: "q30",
      type: "true_false",
      question: "In process state, ready state is when the CPU is executing its instructions.",
      correctAnswer: false,
      explanation: "The CPU executes a process's instructions in the running state. The ready state means the process is prepared to run but is waiting for CPU allocation.",
      reference: "IT0035 Module 2 — Process States"
    },
    {
      id: "q31",
      type: "multiple_choice",
      question: "NON-PREEMPTIVE PRIORITY SCHEDULING\n\nWhat is the Turn Around Time of Process D?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-priority-abcd.png",
      options: ["20", "14", "19", "7"],
      correctAnswer: 2,
      explanation: "Priority 1 is highest. The schedule is A(0–5), C(5–13), B(13–16), D(16–22). D arrives at time 3 and completes at 22, so turnaround time = 22 - 3 = 19.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q32",
      type: "multiple_choice",
      question: "SHORTEST JOB FIRST\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-sjf-abcd.png",
      options: ["10.75", "23", "5.25", "5.75"],
      correctAnswer: 2,
      explanation: "Under non-preemptive SJF, A runs 0–5, B 5–8, D 8–14, and C 14–22. Waiting times are A=0, B=4, C=12, D=5. Average = 21/4 = 5.25.",
      reference: "IT0035 Module 2 — Shortest Job First Scheduling"
    },
    {
      id: "q33",
      type: "multiple_choice",
      question: "SHORTEST JOB FIRST\n\nWhat is the Turn Around Time of Process C?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-sjf-abcd.png",
      options: ["14", "20", "7", "19"],
      correctAnswer: 1,
      explanation: "In non-preemptive SJF, C executes from time 14 to 22. Since C arrived at time 2, turnaround time = 22 - 2 = 20.",
      reference: "IT0035 Module 2 — Shortest Job First Scheduling"
    },
    {
      id: "q34",
      type: "multiple_choice",
      question: "All processes arrive at 0ms.\n\nIn Non-preemptive Shortest Job First, at what time did all jobs finished?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-all-zero.png",
      options: ["14ms", "16ms", "15ms", "17ms"],
      correctAnswer: 3,
      explanation: "All processes arrive at time zero. Their CPU bursts are 5, 1, 8, and 3 ms. Total execution time = 5 + 1 + 8 + 3 = 17 ms, assuming no context-switch overhead.",
      reference: "IT0035 Module 2 — Non-preemptive Shortest Job First"
    },
    {
      id: "q35",
      type: "multiple_choice",
      question: "All processes arrive at 0ms.\n\nWhat is the correct sequence of the processes when served by the CPU using Shortest Job First Non-preemptive?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-all-zero.png",
      options: ["ABDC", "DCAB", "BDAC", "ABCD"],
      correctAnswer: 2,
      explanation: "All processes arrive at time zero, so non-preemptive SJF orders them by increasing burst time: B=1, D=3, A=5, C=8. The sequence is BDAC.",
      reference: "IT0035 Module 2 — Non-preemptive Shortest Job First"
    },
    {
      id: "q36",
      type: "multiple_choice",
      question: "PREEMPTIVE PRIORITY SCHEDULING\n\nWhat process has a waiting time of 0?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-priority-p1p4.png",
      options: ["P4", "P1", "P3", "P2"],
      correctAnswer: 1,
      explanation: "P1 arrives at time 0 with priority 1, the highest priority, and executes immediately. A later process with equal priority does not preempt it under the usual FCFS tie rule. P1's waiting time is 0.",
      reference: "IT0035 Module 2 — Preemptive Priority Scheduling"
    },
    {
      id: "q37",
      type: "multiple_choice",
      question: "SHORTEST REMAINING TIME (SRT)\n\nWhat process has 3 mins waiting time and 3 mins turnaround time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-sjf-abcd.png",
      options: ["P1 & P2", "P2 & P3", "P1 & P4", "P3 & P4"],
      correctAnswer: 0,
      explanation: "INTERPRETATION NOTE: The question requires identifying two different processes. Under SRT, P1 has 3 minutes of waiting time, while P2 has a 3-minute turnaround time. No single process has both values. Therefore, P1 & P2 is the intended pair.",
      reference: "IT0035 Module 2 — Shortest Remaining Time; Waiting and Turnaround Times"
    },
    {
      id: "q38",
      type: "multiple_choice",
      question: "SHORTEST REMAINING TIME (SRT)\n\nWhat is the Waiting Time of P2?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-sjf-abcd.png",
      options: ["3", "12", "0", "5"],
      correctAnswer: 2,
      explanation: "P2 arrives at time 1 with a 3-unit burst, preempts P1, and immediately executes from 1 to 4. Waiting time = completion - arrival - burst = 4 - 1 - 3 = 0.",
      reference: "IT0035 Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q39",
      type: "multiple_choice",
      question: "SHORTEST REMAINING TIME (SRT)\n\nWhat is the Turn Around Time of P4?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-sjf-abcd.png",
      options: ["20", "3", "11", "8"],
      correctAnswer: 2,
      explanation: "The SRT schedule is P1(0–1), P2(1–4), P1(4–8), P4(8–14), P3(14–22). P4 arrives at time 3 and completes at 14, so turnaround time = 14 - 3 = 11.",
      reference: "IT0035 Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q40",
      type: "multiple_choice",
      question: "ROUND-ROBIN (RR) SCHEDULING\n\ntime quantum = 3 ms\n\nWhat process has a turnaround time of 17?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-sjf-abcd.png",
      options: ["P1", "P3", "P2", "P4"],
      correctAnswer: 3,
      explanation: "With quantum 3, P4 completes at time 20 after executing in two time slices. Since it arrived at time 3, turnaround time = 20 - 3 = 17.",
      reference: "IT0035 Module 2 — Round Robin Scheduling, Quantum 3"
    },
    {
      id: "q41",
      type: "multiple_choice",
      question: "ROUND-ROBIN (RR) SCHEDULING\n\ntime quantum = 3 ms\n\nWhat is the Waiting Time of P3?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-sjf-abcd.png",
      options: ["12", "11", "9", "2"],
      correctAnswer: 0,
      explanation: "P3 arrives at time 2, requires 8 CPU time units, and finishes at time 22. Waiting time = 22 - 2 - 8 = 12.",
      reference: "IT0035 Module 2 — Round Robin Scheduling"
    },
    {
      id: "q42",
      type: "multiple_choice",
      question: "PREEMPTIVE PRIORITY SCHEDULING\n\nWhat is the Waiting Time of P4?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-priority-p1p4.png",
      options: ["12", "0", "3", "13"],
      correctAnswer: 3,
      explanation: "Under preemptive priority scheduling with priority 1 highest, the order is P1(0–5), P3(5–13), P2(13–16), P4(16–22). P4 arrived at 3 and starts at 16, so waiting time = 16 - 3 = 13.",
      reference: "IT0035 Module 2 — Preemptive Priority Scheduling"
    },
    {
      id: "q43",
      type: "multiple_choice",
      question: "ROUND-ROBIN (RR) SCHEDULING\n\ntime quantum = 3 ms\n\nWhat process has a waiting time of 12?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-sjf-abcd.png",
      options: ["P4", "P3", "P2", "P1"],
      correctAnswer: 1,
      explanation: "P3 completes at time 22, arrived at 2, and has a burst time of 8. Therefore waiting time = 22 - 2 - 8 = 12, making P3 the correct answer.",
      reference: "IT0035 Module 2 — Round Robin Scheduling"
    },
    {
      id: "q44",
      type: "multiple_choice",
      question: "ROUND-ROBIN (RR) SCHEDULING\n\ntime quantum = 3 ms\n\nWhat is the Waiting Time of P1?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-sjf-abcd.png",
      options: ["11", "9", "2", "12"],
      correctAnswer: 1,
      explanation: "Under Round Robin with quantum 3, P1 runs at times 0–3 and 12–14. It completes at 14, arrived at 0, and needs 5 units of CPU time. Waiting time = 14 - 0 - 5 = 9.",
      reference: "IT0035 Module 2 — Round Robin Scheduling"
    },
    {
      id: "q45",
      type: "multiple_choice",
      question: "PREEMPTIVE PRIORITY SCHEDULING\n\nWhat process has a waiting time of 12?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-midterm-priority-p1p4.png",
      options: ["P1", "P4", "P2", "P3"],
      correctAnswer: 2,
      explanation: "CORRECTED ANSWER: P2 starts at time 13 after P1 and P3 finish. Since P2 arrived at time 1, waiting time = 13 - 1 = 12. P4 starts at time 16 after arriving at 3, so P4's waiting time is 13, not 12. The original selected answer P4 was incorrect.",
      reference: "IT0035 Module 2 — Preemptive Priority Scheduling; Original Midterm Q45"
    }
  ]
});
