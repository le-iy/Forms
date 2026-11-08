
window.PandoraQuizzes.register({
  id: "IT0035-M02-DIAG",
  subject: "IT0035",
  module: 2,
  title: "Diagnostic Test",
  kind: "practice",
  version: 1,
  description: "40-item diagnostic assessment covering operating system fundamentals, computer system organization, interrupts, memory, and CPU scheduling from Modules 1 and 2.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Which is not an open-source operating system?",
      options: ["Linux", "Ubuntu", "Android", "Mac OS X"],
      correctAnswer: 3,
      explanation: "Mac OS X is Apple's proprietary operating system. Linux, Ubuntu, and the core Android Open Source Project are open-source, although some Android distributions include proprietary components.",
      reference: "Module 1 — Introduction to Operating Systems"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "A software-generated interrupt caused either by an error or a user request such as stack overflow, division by zero, invalid opcode is called ____________________.",
      options: ["Trap", "Lost Interrupt", "Bait", "System Call"],
      correctAnswer: 0,
      explanation: "A trap is a software-generated interrupt or exception caused by conditions such as division by zero, invalid instructions, or requests for operating-system services.",
      reference: "Module 1 — Types of Interrupts"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "A type of OS where the input data (job) are collected into batches or sets of records with similar needs and each batch is processed as a unit(group).",
      options: ["Real-Time OS", "Timeline OS", "Batch OS", "Time-Sharing OS"],
      correctAnswer: 2,
      explanation: "A batch operating system groups jobs with similar processing requirements and executes them as batches, generally without direct user interaction during execution.",
      reference: "Module 1 — Batch Operating System"
    },
    {
      id: "q4",
      type: "true_false",
      question: "Batch OS creates an interactive environment with its users.",
      correctAnswer: false,
      explanation: "Batch processing generally does not provide direct interaction while jobs execute. Interactive operation is more characteristic of time-sharing systems.",
      reference: "Module 1 — Batch and Time-Sharing Operating Systems"
    },
    {
      id: "q5",
      type: "true_false",
      question: "In the operating system operations, mode bit (1) represents user mode.",
      correctAnswer: true,
      explanation: "In the course's dual-mode convention, mode bit 1 identifies user mode while mode bit 0 identifies kernel mode. This corrects the answer previously suggested by Google Lens.",
      reference: "Module 1 — Dual-Mode Operation"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "Programs that are used to solve user computing problems.",
      options: [
        "Application Systems",
        "Operating Systems",
        "Application Programs",
        "Utility Programs"
      ],
      correctAnswer: 2,
      explanation: "Application programs perform tasks and solve computing problems for users, such as document editing, spreadsheets, and other user-oriented activities.",
      reference: "Module 1 — Computer System Components"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "In computer system organization, there are multiple device ________, each in charge of a particular device such as keyboard, mouse, printer etc.",
      options: ["buffers", "drivers", "controllers", "chargers"],
      correctAnswer: 2,
      explanation: "Device controllers manage particular device types and coordinate communication between devices, system memory, and the CPU.",
      reference: "Module 1 — Computer System Organization"
    },
    {
      id: "q8",
      type: "true_false",
      question: "RAM is a non-volatile type of memory.",
      correctAnswer: false,
      explanation: "Ordinary RAM is volatile, meaning its stored information is normally lost when electrical power is removed.",
      reference: "Module 1 — Memory and Computer Hardware"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "In computer system organization, one or more CPUs, device controllers connect through common bus providing access to shared __________.",
      options: ["documents", "hard disk", "files", "memory"],
      correctAnswer: 3,
      explanation: "CPUs and device controllers communicate through a shared bus that provides access to common system memory.",
      reference: "Module 1 — Computer System Operation"
    },
    {
      id: "q10",
      type: "true_false",
      question: "The OS is responsible for reading and/or writing data from I/O devices such as disks, tapes, printers, keyboards, etc.",
      correctAnswer: true,
      explanation: "Operating systems manage I/O services by coordinating input and output operations between software and peripheral devices.",
      reference: "Module 1 — Operating System Services"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "__________ is a system software that acts as an interface between the computer user and computer hardware.",
      options: [
        "Application Software",
        "Flash Drive",
        "Driver",
        "Operating System"
      ],
      correctAnswer: 3,
      explanation: "An operating system provides an interface between users and hardware while managing hardware resources and program execution.",
      reference: "Module 1 — Definition of an Operating System"
    },
    {
      id: "q12",
      type: "true_false",
      question: "The operating system preserves the state of the CPU by storing registers and the program counter",
      correctAnswer: true,
      explanation: "During interrupt handling or context switching, the system saves CPU register values and the program counter so execution can resume later.",
      reference: "Module 1 — Interrupt Handling and CPU State"
    },
    {
      id: "q13",
      type: "true_false",
      question: "Windows 10 is an example of Time-sharing OS.",
      correctAnswer: true,
      explanation: "Windows 10 uses multitasking and CPU scheduling to share processor time among multiple processes, consistent with the time-sharing concept.",
      reference: "Module 1 — Time-Sharing Operating System"
    },
    {
      id: "q14",
      type: "true_false",
      question: "In computer system organization, the I/O devices and the CPU both execute concurrently.",
      correctAnswer: true,
      explanation: "CPU execution and device operations can overlap, allowing computation and input/output processing to occur concurrently.",
      reference: "Module 1 — Computer System Organization"
    },
    {
      id: "q15",
      type: "true_false",
      question: "In the operating system operations, mode bit (0) represents user mode.",
      correctAnswer: false,
      explanation: "Under the module's convention, mode bit 0 indicates kernel mode rather than user mode. Mode bit 1 indicates user mode.",
      reference: "Module 1 — Dual-Mode Operation"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "It is the core of an OS which manages system resources and is always resident in memory.",
      options: ["Kernel", "iOS", "Boot Loader", "BIOS"],
      correctAnswer: 0,
      explanation: "The kernel is the central part of an operating system that manages essential resources, including processor time, memory, and devices.",
      reference: "Module 1 — Operating System Kernel"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "Which is not a volatile-type of memory or storage?",
      options: ["RAM", "Registers", "Cache", "Hard Disk"],
      correctAnswer: 3,
      explanation: "A hard disk is non-volatile secondary storage that retains data without power. RAM, processor registers, and ordinary cache memory are volatile.",
      reference: "Module 1 — Computer Memory; Module 5 — Mass Storage Management"
    },
    {
      id: "q18",
      type: "true_false",
      question: "Real-time systems are used when there are no time requirements or constraints.",
      correctAnswer: false,
      explanation: "Real-time systems are designed to satisfy specified timing constraints, including deadlines for processing and responses.",
      reference: "Module 1 — Real-Time Operating Systems"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "A type of operating system that provides services across the network.",
      options: ["Real-Time OS", "Network OS", "Mobile OS", "Batch OS"],
      correctAnswer: 1,
      explanation: "A network operating system provides services for managing and sharing network resources, such as user accounts, files, printers, and network connections.",
      reference: "Module 1 — Network Operating System"
    },
    {
      id: "q20",
      type: "true_false",
      question: "User cannot use computer without an operating system.",
      correctAnswer: true,
      explanation: "The intended introductory course answer is True because normal personal computer use depends on operating-system services. Technically, computers can also execute bare-metal software without a conventional OS, so the statement is not universally true.",
      reference: "Module 1 — Importance of Operating Systems"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "Non-preemptive Priority\n\nWhat is the sequence of processes in the Gantt chart?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["DBACEF", "DAEBFC", "ADEBFC", "ABCDEF"],
      correctAnswer: 2,
      explanation: "Priority 1 is highest. A runs first from 0–5, followed by D from 5–8, E from 8–12, B from 12–13, F from 13–15, and C from 15–23. Therefore the sequence is ADEBFC.",
      reference: "Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT)\n\nWhich process executed last?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["D", "C", "B", "A"],
      correctAnswer: 1,
      explanation: "The SRT schedule is A(0–2), B(2–3), A(3–6), D(6–9), F(9–11), E(11–15), and C(15–23). C is the final process to complete.",
      reference: "Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q23",
      type: "multiple_choice",
      question: "Round Robin (RR) where quantum = 3\n\nWhat is the Turn Around Time of Process B?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["13", "8", "2", "9"],
      correctAnswer: 2,
      explanation: "A executes from 0–3, followed by B from 3–4. B arrived at time 2 and completed at time 4, so its turnaround time is 4 - 2 = 2.",
      reference: "Module 2 — Round Robin Scheduling"
    },
    {
      id: "q24",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT)\n\nWhat is the Waiting Time of Process C?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["5", "12", "11", "0"],
      correctAnswer: 1,
      explanation: "C arrives at time 3, runs from 15–23, and has a burst time of 8. Waiting time = completion - arrival - burst = 23 - 3 - 8 = 12.",
      reference: "Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q25",
      type: "multiple_choice",
      question: "Preemptive Priority\n\nWhat is the Turn Around Time of Process D?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["9", "8", "13", "3"],
      correctAnswer: 3,
      explanation: "D arrives at time 4 with the highest priority, preempts A, and executes from time 4 to 7. Its turnaround time is 7 - 4 = 3.",
      reference: "Module 2 — Preemptive Priority Scheduling"
    },
    {
      id: "q26",
      type: "multiple_choice",
      question: "Non-preemptive Priority\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["9", "8", "8.67", "5"],
      correctAnswer: 2,
      explanation: "The execution order is A-D-E-B-F-C. The individual turnaround times are A=5, B=11, C=20, D=4, E=5, and F=7. Their sum is 52, so the average is 52/6 = 8.67.",
      reference: "Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "Non-preemptive Priority\n\nWhat is the Turn Around Time of Process B?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["11", "20", "3", "5"],
      correctAnswer: 0,
      explanation: "B starts at time 12 and finishes at 13. Since B arrived at time 2, its turnaround time is 13 - 2 = 11.",
      reference: "Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT)\n\nWhat is the Waiting Time of Process D?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["5", "12", "3", "2"],
      correctAnswer: 3,
      explanation: "D arrives at time 4 and begins running at time 6. It completes at time 9. Its waiting time is 9 - 4 - 3 = 2.",
      reference: "Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "Non-preemptive Priority\n\nWhat is the Waiting Time of Process F?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["7", "10", "5", "12"],
      correctAnswer: 2,
      explanation: "Under non-preemptive priority scheduling, F begins at time 13. Since F arrived at time 8, its waiting time is 13 - 8 = 5.",
      reference: "Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "First-Come First-Served (FCFS)\n\nWhat is the Waiting Time of Process C?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["12", "0", "3", "5"],
      correctAnswer: 2,
      explanation: "FCFS processes arrive in the sequence A-B-C-D-E-F. A runs 0–5, B runs 5–6, and C starts at 6. Since C arrived at 3, its waiting time is 6 - 3 = 3.",
      reference: "Module 2 — First-Come First-Served Scheduling"
    },
    {
      id: "q31",
      type: "multiple_choice",
      question: "Non-Pre-emptive Shortest Job First (SJF)\n\nWhat is the Turn Around Time of Process A?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["3", "20", "11", "5"],
      correctAnswer: 3,
      explanation: "A is the only available process at time 0, so it runs from 0–5. Turnaround time = completion - arrival = 5 - 0 = 5.",
      reference: "Module 2 — Non-preemptive Shortest Job First Scheduling"
    },
    {
      id: "q32",
      type: "multiple_choice",
      question: "Round Robin (RR) where quantum = 3\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["8.5", "10.83", "5.67", "6.5"],
      correctAnswer: 1,
      explanation: "The Round Robin turnaround times are A=9, B=2, C=20, D=8, E=14, and F=12. Their total is 65. Average turnaround time = 65/6 = 10.83.",
      reference: "Module 2 — Round Robin Scheduling, Quantum 3"
    },
    {
      id: "q33",
      type: "multiple_choice",
      question: "First-Come First-Served (FCFS)\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["6.5", "8", "10.5", "6"],
      correctAnswer: 0,
      explanation: "FCFS waiting times are A=0, B=3, C=3, D=10, E=10, and F=13. Their sum is 39, giving an average of 39/6 = 6.5.",
      reference: "Module 2 — First-Come First-Served Scheduling"
    },
    {
      id: "q34",
      type: "multiple_choice",
      question: "Non-Pre-emptive Shortest Job First (SJF)\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["9", "7.5", "5", "8"],
      correctAnswer: 1,
      explanation: "The execution order is A-B-D-F-E-C. Turnaround times for A through F are 5, 4, 20, 5, 8, and 3. Their sum is 45, so the average is 45/6 = 7.5.",
      reference: "Module 2 — Non-preemptive Shortest Job First Scheduling"
    },
    {
      id: "q35",
      type: "multiple_choice",
      question: "Non-preemptive Priority\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["8", "10.5", "4.83", "6"],
      correctAnswer: 2,
      explanation: "The waiting times under non-preemptive priority scheduling are A=0, B=10, C=12, D=1, E=1, and F=5. Their sum is 29, giving an average waiting time of 29/6 = 4.83.",
      reference: "Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q36",
      type: "multiple_choice",
      question: "Preemptive Priority\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["8.5", "5.67", "9.5", "6.5"],
      correctAnswer: 2,
      explanation: "Preemptive priority scheduling interrupts A when higher-priority D arrives at time 4. Using priority 1 as highest, the turnaround times for A through F are 12, 11, 20, 3, 4, and 7. Their sum is 57, giving an average of 57/6 = 9.5.",
      reference: "Module 2 — Preemptive Priority Scheduling"
    },
    {
      id: "q37",
      type: "multiple_choice",
      question: "First-Come First-Served (FCFS)\n\nWhat is the Waiting Time of Process D?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["0", "10", "12", "5"],
      correctAnswer: 1,
      explanation: "In FCFS, D begins after A, B, and C at time 14. Since D arrives at time 4, its waiting time is 14 - 4 = 10.",
      reference: "Module 2 — First-Come First-Served Scheduling"
    },
    {
      id: "q38",
      type: "multiple_choice",
      question: "First-Come First-Served (FCFS)\n\nWhat is the Turn Around Time of Process D?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["11", "20", "13", "3"],
      correctAnswer: 2,
      explanation: "D executes from time 14 to time 17. Its arrival time is 4, so turnaround time = 17 - 4 = 13.",
      reference: "Module 2 — First-Come First-Served Scheduling"
    },
    {
      id: "q39",
      type: "multiple_choice",
      question: "Round Robin (RR) where quantum = 3\n\nWhich job has the longest waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["Process D", "Process E", "Process C", "Process F"],
      correctAnswer: 2,
      explanation: "Round Robin waiting times are A=4, B=1, C=12, D=5, E=10, and F=10. Process C has the longest waiting time at 12 time units.",
      reference: "Module 2 — Round Robin Scheduling"
    },
    {
      id: "q40",
      type: "multiple_choice",
      question: "Non-Pre-emptive Shortest Job First (SJF)\n\nWhat is the Waiting Time of Process A?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/diagnostic-cpu-scheduling-table.png",
      options: ["5", "12", "0", "3"],
      correctAnswer: 2,
      explanation: "At time 0, A is the only available process, so it begins immediately. Its waiting time is 0 - 0 = 0.",
      reference: "Module 2 — Non-preemptive Shortest Job First Scheduling"
    }
  ]
});
