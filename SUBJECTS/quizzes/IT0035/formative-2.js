
window.PandoraQuizzes.register({
  id: "IT0035-M02-F02",
  subject: "IT0035",
  module: 2,
  title: "Formative Assessment 2",
  kind: "formative",
  version: 1,
  description: "20-question assessment on process concepts, process states, scheduling, and CPU scheduling algorithms including FCFS, non-preemptive priority, SRT, preemptive priority, and Round Robin.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "true_false",
      question: "The time from submission to completion of a process is called response time.",
      correctAnswer: false,
      explanation: "The total time from process submission or arrival until completion is turnaround time, not response time. Response time measures the interval from arrival until the process first receives CPU service or produces its first response.",
      reference: "IT0035 Module 2 — CPU Scheduling Criteria: Turnaround Time and Response Time"
    },
    {
      id: "q2",
      type: "true_false",
      question: "The processes in the system can execute concurrently; that is, many processes may be multitasked on a CPU.",
      correctAnswer: true,
      explanation: "Multiple processes can execute concurrently through CPU time sharing. On a single CPU core, processes are interleaved by switching execution among them, while multicore systems can also execute processes in parallel.",
      reference: "IT0035 Module 2, page 17 — Concurrent Processes"
    },
    {
      id: "q3",
      type: "true_false",
      question: "A process is a passive entity.",
      correctAnswer: false,
      explanation: "A process is an active entity because it represents a program currently in execution. A program stored on disk is the passive entity.",
      reference: "IT0035 Module 2, page 5 — Process Concept"
    },
    {
      id: "q4",
      type: "true_false",
      question: "Program stored in your disk is considered as passive entity.",
      correctAnswer: true,
      explanation: "A program stored on disk is considered passive because it consists of instructions and data that are not currently executing. When executed, the program becomes an active process.",
      reference: "IT0035 Module 2, page 5 — Process Concept"
    },
    {
      id: "q5",
      type: "true_false",
      question: "A process terminates when it finishes its first statement and asks the operating system to delete it using the exit system call.",
      correctAnswer: false,
      explanation: "A process normally terminates after finishing its last statement, not its first statement. It can then request termination through an exit system call.",
      reference: "IT0035 Module 2, page 19 — Concurrent Processes: Process Termination"
    },
    {
      id: "q6",
      type: "true_false",
      question: "In process state, running state is when the process is being created",
      correctAnswer: false,
      explanation: "The new state indicates that a process is being created. The running state indicates that the CPU is executing the process's instructions.",
      reference: "IT0035 Module 2, page 10 — Process State"
    },
    {
      id: "q7",
      type: "true_false",
      question: "When a program is loaded into the memory and it becomes a process.",
      correctAnswer: true,
      explanation: "A program becomes a process when it is loaded into memory and begins execution. The statement is grammatically incomplete in the original quiz, but its intended concept is correct.",
      reference: "IT0035 Module 2, page 8 — Process Architecture"
    },
    {
      id: "q8",
      type: "true_false",
      question: "The long term scheduler selects process from among the processes that are ready to execute, and allocates the CPU to one of them.",
      correctAnswer: false,
      explanation: "This describes the short-term scheduler, also called the CPU scheduler. The long-term scheduler selects jobs from secondary storage and admits them into memory for execution.",
      reference: "IT0035 Module 2, pages 26–27 — Types of Scheduler"
    },
    {
      id: "q9",
      type: "true_false",
      question: "In process, DATA section contains the global and static variables.",
      correctAnswer: true,
      explanation: "The data section of a process stores global and static variables. Other process memory sections include the stack, heap, and text sections.",
      reference: "IT0035 Module 2, page 9 — Process Architecture"
    },
    {
      id: "q10",
      type: "true_false",
      question: "A computer system consists of a collection of processes.",
      correctAnswer: true,
      explanation: "A computer system consists of operating-system processes that execute system code and user processes that execute user code.",
      reference: "IT0035 Module 2, page 5 — Process Concept"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "FIRST-COME, FIRST SERVED\n\nWhat is the Waiting Time of Process A?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-f02-fcfs-staggered.png",
      options: ["10", "2", "0", "17"],
      correctAnswer: 2,
      explanation: "Under FCFS, processes execute in order of arrival. A arrives at time 0 and begins immediately, running from 0 to 5. Waiting time = start time - arrival time = 0 - 0 = 0.",
      reference: "IT0035 Module 2 — First-Come First-Served Scheduling"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "FIRST-COME, FIRST SERVED\n\nWhat is the Waiting Time of Process C?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-f02-fcfs-simultaneous.png",
      options: ["6", "10", "16", "8"],
      correctAnswer: 3,
      explanation: "All four processes arrive at time 0. Using the listed order A, B, C, D for equal arrivals, A runs from 0 to 5 and B from 5 to 8. C therefore starts at time 8. Its waiting time is 8 - 0 = 8.",
      reference: "IT0035 Module 2 — First-Come First-Served Scheduling; FCFS Tie-Breaking by Listed Order"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "FIRST-COME, FIRST SERVED\n\nWhat is the correct sequence of the process when served by the CPU?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-f02-fcfs-staggered.png",
      options: ["DCBA", "ACDB", "ABCD", "ACBD"],
      correctAnswer: 2,
      explanation: "FCFS schedules processes based on arrival time. A arrives at 0, B at 1, C at 2, and D at 3. Therefore, the execution sequence is A-B-C-D.",
      reference: "IT0035 Module 2 — First-Come First-Served Scheduling"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "NON-PREEMPTIVE PRIORITY SCHEDULING\n\nWhat is the correct sequence of the process when served by the CPU?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-f02-priority-abcd.png",
      options: ["ACDB", "DCBA", "ABDC", "ACBD"],
      correctAnswer: 3,
      explanation: "A is the only available process at time 0 and executes from 0 to 5. Since the algorithm is non-preemptive, it finishes before another process is selected. Among the waiting processes, C has priority 1, B has priority 2, and D has priority 3. A and C share priority 1, with A having arrived first. The sequence is A-C-B-D.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "NON-PREEMPTIVE PRIORITY SCHEDULING\n\nWhat is the Waiting Time of Process A?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-f02-priority-abcd.png",
      options: ["0", "10", "17", "2"],
      correctAnswer: 0,
      explanation: "A arrives at time 0 and is immediately assigned the CPU. Therefore its waiting time is 0. Non-preemptive priority scheduling does not interrupt a process that is already executing.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "SHORTEST REMAINING TIME (SRT)\n\nWhat process has a waiting time of 12?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-f02-processes-p1-p4.png",
      options: ["P1", "P2", "P3", "P4"],
      correctAnswer: 2,
      explanation: "CORRECTED ANSWER: The SRT execution is P1(0-1), P2(1-4), P1(4-8), P4(8-14), and P3(14-22). P3 arrives at time 2, completes at time 22, and has a burst time of 8. Waiting time = 22 - 2 - 8 = 12. The original selected answer P4 is incorrect; P4 has a waiting time of 5.",
      reference: "IT0035 Module 2 — Shortest Remaining Time Scheduling; Original FA2 Q16"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "PREEMPTIVE PRIORITY SCHEDULING\n\nWhat is the Turn Around Time of P1?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-f02-priority-p1-p4.png",
      options: ["19", "15", "5", "11"],
      correctAnswer: 2,
      explanation: "P1 arrives at time 0 with priority 1, the highest priority. P2 arrives at time 1 with lower priority 2, and P3 arrives at time 2 with equal priority 1. Under the standard convention that an equal-priority arrival does not preempt the running process, P1 finishes at time 5. Turnaround time = 5 - 0 = 5.",
      reference: "IT0035 Module 2 — Preemptive Priority Scheduling; Equal-Priority FCFS Tie-Breaking"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "ROUND-ROBIN (RR) SCHEDULING\n\ntime quantum = 3 ms\n\nWhat is the Waiting Time of P1?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-f02-processes-p1-p4.png",
      options: ["11", "2", "9", "12"],
      correctAnswer: 2,
      explanation: "With a time quantum of 3 ms, P1 executes from 0 to 3 and later from 12 to 14. Its completion time is 14, arrival time is 0, and burst time is 5. Waiting time = 14 - 0 - 5 = 9 ms. The queue follows the standard convention of appending newly arrived processes before requeuing the unfinished process at the quantum boundary.",
      reference: "IT0035 Module 2 — Round Robin Scheduling, Time Quantum 3 ms"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "SHORTEST REMAINING TIME (SRT)\n\nWhat is the Waiting Time of P1?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-f02-processes-p1-p4.png",
      options: ["3", "5", "12", "0"],
      correctAnswer: 0,
      explanation: "P1 executes from 0 to 1, is preempted by P2, and resumes from 4 to 8. Its completion time is 8, arrival time is 0, and burst time is 5. Waiting time = 8 - 0 - 5 = 3.",
      reference: "IT0035 Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "PREEMPTIVE PRIORITY SCHEDULING\n\nWhat process has a waiting time of 0?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-f02-priority-p1-p4.png",
      options: ["P1", "P3", "P4", "P2"],
      correctAnswer: 0,
      explanation: "P1 is the first process to arrive at time 0 and has the highest priority level, 1. It starts executing immediately and completes without waiting. Its waiting time is therefore 0.",
      reference: "IT0035 Module 2 — Preemptive Priority Scheduling"
    }
  ]
});
