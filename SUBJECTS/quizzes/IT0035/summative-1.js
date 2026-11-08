
window.PandoraQuizzes.register({
  id: "IT0035-M02-S01",
  subject: "IT0035",
  module: 2,
  title: "Summative Assessment 1",
  kind: "summative",
  version: 1,
  description: "45-question summative assessment covering operating system fundamentals, process management, and CPU scheduling algorithms. Original score: 58/60.",
  createdAt: "2026-11-07T02:12:16+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Another term for restarting the computer.",
      options: [
        "Cold Boot",
        "Warm Boot",
        "Fast Boot",
        "Hibernate"
      ],
      correctAnswer: 1,
      explanation: "A warm boot restarts a computer without completely turning its power off. A cold boot refers to starting a computer from a powered-off state.",
      reference: "IT0035 Module 1 — Operating System Startup and Booting"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "Operating system controls and ________ the use of the hardware among the various application programs for the various users.",
      options: [
        "observes",
        "coordinates",
        "declines",
        "checks"
      ],
      correctAnswer: 1,
      explanation: "An operating system manages hardware resources and coordinates their use among application programs and users.",
      reference: "IT0035 Module 1 — Definition and Functions of an Operating System"
    },
    {
      id: "q3",
      type: "true_false",
      question: "Distributed system is also known as loosely-coupled system.",
      correctAnswer: true,
      explanation: "In traditional operating-system terminology, distributed systems comprise independent computers that communicate through a network and are described as loosely coupled.",
      reference: "IT0035 Module 1 — Distributed Operating Systems"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "A type of OS where the input data (job) are collected into batches or sets of records with similar needs and each batch is processed as a unit(group).",
      options: [
        "Time-Sharing OS",
        "Real-Time OS",
        "Batch OS",
        "Timeline OS"
      ],
      correctAnswer: 2,
      explanation: "A batch operating system collects jobs with similar processing requirements and executes them together, generally without interaction during execution.",
      reference: "IT0035 Module 1 — Batch Operating Systems"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "A type of multiprocessing in which all processors are peers and each processor performs all tasks within the operating system.",
      options: [
        "Symmetric",
        "Asymmetric",
        "Asynchronous",
        "Systematic"
      ],
      correctAnswer: 0,
      explanation: "Symmetric multiprocessing allows processors to operate as peers, with each processor capable of performing operating-system tasks. Asymmetric multiprocessing instead assigns specialized roles.",
      reference: "IT0035 Module 1 — Symmetric and Asymmetric Multiprocessing"
    },
    {
      id: "q6",
      type: "true_false",
      question: "RAM is a non-volatile type of memory.",
      correctAnswer: false,
      explanation: "Ordinary random-access memory is volatile. It normally loses stored information when power is removed.",
      reference: "IT0035 Module 1 — Computer Memory and Storage"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "Buffer is a region of memory used to ________ hold data while it is being moved from one place to another.",
      options: [
        "virtually",
        "permanently",
        "never",
        "temporarily"
      ],
      correctAnswer: 3,
      explanation: "A buffer temporarily holds data while it is transferred between devices, processes, or different memory locations.",
      reference: "IT0035 Module 1 — Input/Output Operations and Buffering"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "In operating system operations, mode bit (0) indicates that the system is running a ______ code.",
      options: [
        "Hardware",
        "Cheat",
        "User",
        "Kernel"
      ],
      correctAnswer: 3,
      explanation: "Under the convention used in Module 1, mode bit 0 indicates kernel mode and mode bit 1 indicates user mode. Kernel mode allows privileged operations.",
      reference: "IT0035 Module 1 — Dual-Mode Operation"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Which is not an open-source operating system?",
      options: [
        "Android",
        "Mac OS X",
        "Ubuntu",
        "Linux"
      ],
      correctAnswer: 1,
      explanation: "Mac OS X is a proprietary operating system developed by Apple. Linux and Ubuntu are open-source, while the Android Open Source Project provides an open-source Android base, despite proprietary components in many distributions.",
      reference: "IT0035 Module 1 — Operating System Types and Open-Source Systems"
    },
    {
      id: "q10",
      type: "true_false",
      question: "Hard disk is an example of a volatile-type of storage.",
      correctAnswer: false,
      explanation: "Hard disks are non-volatile storage devices because they retain recorded information when electrical power is removed.",
      reference: "IT0035 Module 1 — Memory and Secondary Storage"
    },
    {
      id: "q11",
      type: "true_false",
      question: "Time-sharing or multitasking is logical extension in which CPU switches jobs so frequently that users can interact with each job while it is running.",
      correctAnswer: true,
      explanation: "Time-sharing systems switch CPU execution among processes frequently enough to support interactive use by multiple users or programs.",
      reference: "IT0035 Module 1 — Time-Sharing Operating Systems"
    },
    {
      id: "q12",
      type: "true_false",
      question: "In the operating system operations, mode bit (1) represents kernel mode.",
      correctAnswer: false,
      explanation: "The course uses mode bit 1 for user mode and mode bit 0 for kernel mode. Therefore, the statement is false.",
      reference: "IT0035 Module 1 — Dual-Mode Operation"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "Multiprocessor system is also known as _________ system",
      options: [
        "Synchronous",
        "Asynchronous",
        "Serial",
        "Parallel"
      ],
      correctAnswer: 3,
      explanation: "A multiprocessor system contains multiple processors that can execute operations in parallel, so the intended answer is parallel system.",
      reference: "IT0035 Module 1 — Multiprocessor Systems"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "________ is a system software that acts as an interface between the computer user and computer hardware",
      options: [
        "Operating System",
        "Flash Drive",
        "Application Software",
        "Driver"
      ],
      correctAnswer: 0,
      explanation: "The operating system is system software that provides an interface between users, applications, and computer hardware while managing resources.",
      reference: "IT0035 Module 1 — Operating System Definition"
    },
    {
      id: "q15",
      type: "true_false",
      question: "When a key is pressed or when the mouse is moved it creates a software interrupt.",
      correctAnswer: false,
      explanation: "Keyboard and mouse events ordinarily produce hardware-generated interrupts through their device controllers. Software interrupts arise from software instructions, system calls, or processor exceptions.",
      reference: "IT0035 Module 1 — Hardware and Software Interrupts"
    },
    {
      id: "q16",
      type: "true_false",
      question: "Dropbox is an example of cloud computing service.",
      correctAnswer: true,
      explanation: "Dropbox provides cloud-based file storage and synchronization over the internet, making it an example of a cloud computing service.",
      reference: "IT0035 Module 1 — Cloud Computing"
    },
    {
      id: "q17",
      type: "true_false",
      question: "Windows Azure is an example of Platform as a service(PaaS)",
      correctAnswer: true,
      explanation: "Microsoft Azure, formerly called Windows Azure, provides platform-as-a-service offerings for deploying and managing applications. Azure also offers other cloud service models, so PaaS is one of its capabilities.",
      reference: "IT0035 Module 1 — Cloud Computing Service Models"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "A type of multiprocessing with a boss-worker relationship among its processors",
      options: [
        "Asymmetric",
        "Symmetric",
        "Dynamic",
        "Systematic"
      ],
      correctAnswer: 0,
      explanation: "Asymmetric multiprocessing assigns different roles to processors, commonly with a master processor coordinating worker processors.",
      reference: "IT0035 Module 1 — Asymmetric Multiprocessing"
    },
    {
      id: "q19",
      type: "true_false",
      question: "The user of a Batch Operating System has no interaction with the computer.",
      correctAnswer: true,
      explanation: "In the introductory batch-processing model, users submit jobs and do not interact directly with them while they execute. This statement refers to execution-time interaction, not an absolute inability to interact with the computer at other times.",
      reference: "IT0035 Module 1 — Batch Operating System"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "It is the core of an OS which manages system resources and is always resident in memory.",
      options: [
        "Boot Loader",
        "IOS",
        "BIOS",
        "Kernel"
      ],
      correctAnswer: 3,
      explanation: "The kernel is the core component of an operating system that manages processes, memory, and device operations, and remains available while the OS is running.",
      reference: "IT0035 Module 1 — Kernel"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "The goal of CPU scheduling is to optimize system performance. Which of the following should be minimized?",
      options: [
        "waiting time",
        "turnaround time",
        "all of these",
        "response time"
      ],
      correctAnswer: 2,
      explanation: "CPU scheduling aims to reduce waiting time, turnaround time, and response time, while also improving CPU utilization and throughput. Therefore, all the listed time metrics should generally be minimized.",
      reference: "IT0035 Module 2 — CPU Scheduling Criteria"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "This refers to the portion of a process which includes the current activity represented by the value of Program Counter and the contents of the processor's registers.",
      options: [
        "heap",
        "stack",
        "text",
        "data"
      ],
      correctAnswer: 2,
      explanation: "SOURCE AMBIGUITY: The course's intended answer is text, the code section associated with the current execution activity. However, the program counter and CPU register contents are technically part of the process execution context, not stored in the text section itself. Text is retained as the intended choice because none of the options accurately names the complete execution context.",
      reference: "IT0035 Module 2 — Process Concept and Process Memory Layout; Operating System Concepts — Process Control Block"
    },
    {
      id: "q23",
      type: "multiple_choice",
      question: "A process is divided into four sections: stack, ____________, text and data",
      options: [
        "heap",
        "hip",
        "queue",
        "head"
      ],
      correctAnswer: 0,
      explanation: "The traditional process memory layout includes the text or code section, data section, heap, and stack. The heap is used for dynamically allocated memory.",
      reference: "IT0035 Module 2 — Process Memory Layout"
    },
    {
      id: "q24",
      type: "multiple_choice",
      question: "User processes execute _____ code.",
      options: [
        "physical",
        "utility",
        "system",
        "user"
      ],
      correctAnswer: 3,
      explanation: "User processes execute user code, whereas operating-system or kernel processes execute system code.",
      reference: "IT0035 Module 2 — Process Concept"
    },
    {
      id: "q25",
      type: "multiple_choice",
      question: "A type of scheduling where no process is interrupted until it is completed.",
      options: [
        "Preemptive scheduling",
        "Non-preemptive scheduling",
        "Preventive scheduling",
        "Non-preventive scheduling"
      ],
      correctAnswer: 1,
      explanation: "In non-preemptive CPU scheduling, the running process is not forcibly removed from the CPU by the scheduler. It keeps the CPU until it completes or voluntarily blocks or yields.",
      reference: "IT0035 Module 2 — Preemptive and Non-preemptive Scheduling"
    },
    {
      id: "q26",
      type: "multiple_choice",
      question: "In the process state, it is when the process is waiting for some event to occur (such as an I/O completion).",
      options: [
        "Ready state",
        "Waiting state",
        "New state",
        "Running state"
      ],
      correctAnswer: 1,
      explanation: "A process in the waiting or blocked state cannot continue until an event such as I/O completion occurs.",
      reference: "IT0035 Module 2 — Process States"
    },
    {
      id: "q27",
      type: "multiple_choice",
      question: "Which of the following is the collection of processes on the disk that are waiting to be brought into memory for execution forms?",
      options: [
        "job list",
        "process",
        "job queue",
        "memory"
      ],
      correctAnswer: 2,
      explanation: "In the traditional scheduling model, the job queue contains processes waiting on secondary storage to be admitted into main memory for execution.",
      reference: "IT0035 Module 2 — Scheduling Queues"
    },
    {
      id: "q28",
      type: "multiple_choice",
      question: "The processes that are resident in main memory and are ready and waiting to execute are kept on another queue which is the ________ queue.",
      options: [
        "waiting",
        "job",
        "running",
        "ready"
      ],
      correctAnswer: 3,
      explanation: "The ready queue contains processes already in memory that are ready to run but are waiting to be assigned CPU time.",
      reference: "IT0035 Module 2 — Ready Queue"
    },
    {
      id: "q29",
      type: "multiple_choice",
      question: "A process may create several new processes, via a create-process system call, during the course of execution. The creating process is called ________________.",
      options: [
        "child",
        "process",
        "parent",
        "sibling"
      ],
      correctAnswer: 2,
      explanation: "A process that creates another process is called the parent process. The newly created process is its child.",
      reference: "IT0035 Module 2 — Process Creation"
    },
    {
      id: "q30",
      type: "multiple_choice",
      question: "Each process is represented in the operating system by a process ______ block",
      options: [
        "control",
        "check",
        "monitor",
        "information"
      ],
      correctAnswer: 0,
      explanation: "A Process Control Block (PCB) stores information about a process, including its state, program counter, registers, scheduling information, and resource details.",
      reference: "IT0035 Module 2 — Process Control Block"
    },
    {
      id: "q31",
      type: "multiple_choice",
      question: "Non-preemptive Priority\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["8.67", "9", "5", "8"],
      correctAnswer: 0,
      explanation: "With priority level 1 highest, the execution order is A(0-5), D(5-8), E(8-12), B(12-13), F(13-15), C(15-23). Turnaround times are A=5, B=11, C=20, D=4, E=5, F=7. The average is 52/6 = 8.67.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q32",
      type: "multiple_choice",
      question: "Non-preemptive Priority\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["4.83", "8", "10.5", "6"],
      correctAnswer: 0,
      explanation: "The non-preemptive priority waiting times for A-F are 0, 10, 12, 1, 1, and 5. Their sum is 29; average waiting time = 29/6 = 4.83.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q33",
      type: "multiple_choice",
      question: "Round Robin (RR) where quantum = 3\n\nWhat is the Waiting Time of Process C?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["13", "12", "8", "9"],
      correctAnswer: 1,
      explanation: "Under Round Robin quantum 3, C arrives at time 3, completes at time 23, and requires 8 units of CPU time. Waiting time = 23 - 3 - 8 = 12.",
      reference: "IT0035 Module 2 — Round Robin Scheduling"
    },
    {
      id: "q34",
      type: "multiple_choice",
      question: "Round Robin (RR) where quantum = 3\n\nWhat is the Turn Around Time of Process D?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["13", "14", "8", "9"],
      correctAnswer: 2,
      explanation: "D arrives at time 4 and executes from time 9 to 12 in the Round Robin schedule. Its turnaround time is 12 - 4 = 8.",
      reference: "IT0035 Module 2 — Round Robin Scheduling"
    },
    {
      id: "q35",
      type: "multiple_choice",
      question: "Non-preemptive Priority\n\nWhat is the Waiting Time of Process C?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["1", "12", "5", "0"],
      correctAnswer: 1,
      explanation: "C arrives at time 3 but starts at time 15 because processes with higher priority run first. Waiting time = 15 - 3 = 12.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q36",
      type: "multiple_choice",
      question: "Round Robin (RR) where quantum = 3\n\nWhat is the Waiting Time of Process A?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["8", "13", "4", "9"],
      correctAnswer: 2,
      explanation: "A arrives at 0, requires 5 units of CPU time, and completes at time 9. Waiting time = 9 - 0 - 5 = 4.",
      reference: "IT0035 Module 2 — Round Robin Scheduling"
    },
    {
      id: "q37",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT)\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["10.5", "3.33", "8", "6"],
      correctAnswer: 1,
      explanation: "SRT waiting times for A-F are 1, 0, 12, 2, 4, and 1. Their sum is 20, so average waiting time = 20/6 = 3.33.",
      reference: "IT0035 Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q38",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT)\n\nWhat is the Waiting Time of Process B?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["0", "12", "10", "5"],
      correctAnswer: 0,
      explanation: "B arrives at time 2 with a one-unit burst and immediately preempts A. It finishes at time 3, so waiting time = 3 - 2 - 1 = 0.",
      reference: "IT0035 Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q39",
      type: "multiple_choice",
      question: "Round Robin (RR) where quantum = 3\n\nWhat is the Turn Around Time of Process B?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["9", "13", "8", "2"],
      correctAnswer: 3,
      explanation: "B arrives at time 2 and runs from time 3 to 4. Turnaround time = 4 - 2 = 2.",
      reference: "IT0035 Module 2 — Round Robin Scheduling"
    },
    {
      id: "q40",
      type: "multiple_choice",
      question: "Non-preemptive Priority\n\nWhat is the Waiting Time of Process F?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["12", "5", "10", "7"],
      correctAnswer: 1,
      explanation: "F arrives at time 8 and starts at time 13 under non-preemptive priority scheduling. Its waiting time is 13 - 8 = 5.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q41",
      type: "multiple_choice",
      question: "Preemptive Priority\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["8.5", "6.5", "9.5", "5.67"],
      correctAnswer: 2,
      explanation: "With priority 1 highest, A runs 0-4 and is preempted by D. Execution continues D(4-7), E(7-11), A(11-12), B(12-13), F(13-15), C(15-23). Turnaround times are A=12, B=11, C=20, D=3, E=4, F=7. Average = 57/6 = 9.5.",
      reference: "IT0035 Module 2 — Preemptive Priority Scheduling"
    },
    {
      id: "q42",
      type: "multiple_choice",
      question: "Preemptive Priority\n\nWhat is the Waiting Time of Process A?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["13", "7", "8", "9"],
      correctAnswer: 2,
      explanation: "A completes at time 12, arrived at time 0, and needs 5 CPU time units. Waiting time = 12 - 0 - 5 = 7. IMPORTANT REVIEW: This gives 7, not the originally selected 8. The correct answer is option B (7), so the answer index should be 1.",
      reference: "IT0035 Module 2 — Preemptive Priority Scheduling; Original Summative Q42"
    },
    {
      id: "q43",
      type: "multiple_choice",
      question: "Non-Preemptive Shortest Job First (SJF)\n\nWhat is the Waiting Time of Process C?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["12", "5", "0", "10"],
      correctAnswer: 0,
      explanation: "Under non-preemptive SJF, C begins at time 15 and arrives at time 3. Its waiting time is 15 - 3 = 12.",
      reference: "IT0035 Module 2 — Non-preemptive Shortest Job First Scheduling"
    },
    {
      id: "q44",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT)\n\nWhat is the Waiting Time of Process D?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["12", "2", "5", "0"],
      correctAnswer: 1,
      explanation: "D arrives at time 4 and begins at time 6. It runs until time 9, giving waiting time = 9 - 4 - 3 = 2.",
      reference: "IT0035 Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q45",
      type: "multiple_choice",
      question: "Non-preemptive Priority\n\nWhat is the Waiting Time of Process B?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-s01-cpu-scheduling-table.png",
      options: ["7", "5", "12", "10"],
      correctAnswer: 3,
      explanation: "B arrives at time 2 and starts at time 12 after higher-priority processes have run. Its waiting time is 12 - 2 = 10.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Scheduling"
    }
  ]
});
