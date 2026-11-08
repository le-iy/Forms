
window.PandoraQuizzes.register({
  id: "IT0035-M02-SW01",
  subject: "IT0035",
  module: 2,
  title: "Seatwork 1",
  kind: "practice",
  version: 1,
  description: "22-item seatwork on CPU scheduling: FCFS, SJF, SRT, Round Robin, and preemptive and non-preemptive priority scheduling. Original score: 34/40.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,
  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "First-Come First-Served (FCFS)\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["6", "5.75", "6.5", "5.5"],
      correctAnswer: 2,
      explanation: "FCFS executes A(0-4), B(4-13), C(13-15), and D(15-20). The waiting times are 0, 3, 11, and 12. Average waiting time = (0+3+11+12)/4 = 6.5.",
      reference: "IT0035 Module 2 — First-Come First-Served Scheduling"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "Priority (Pre-emptive)\n\nWhat is the correct sequence of the process when served by the CPU?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["ADCB", "ACDAB", "ACDCAB", "DCAB"],
      correctAnswer: 2,
      explanation: "CORRECTED ANSWER: With priority 1 highest, A runs 0-2, C preempts it at 2, D preempts C at 3, then the remaining processes finish in priority order. Timeline: A(0-2), C(2-3), D(3-8), C(8-9), A(9-11), B(11-20). The sequence is ACDCAB.",
      reference: "IT0035 Module 2 — Preemptive Priority Scheduling"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "Priority (Pre-emptive)\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["9.5", "10.75", "10", "10.5"],
      correctAnswer: 3,
      explanation: "Preemptive priority completion times are A=11, B=20, C=9, and D=8. Turnaround times are 11, 19, 7, and 5. Their average is 42/4 = 10.5.",
      reference: "IT0035 Module 2 — Preemptive Priority Scheduling and Turnaround Time"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Round Robin (RR) where quantum = 3\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["7.75", "7", "7.5", "8"],
      correctAnswer: 0,
      explanation: "RR quantum 3 produces completion times A=12, B=20, C=8, D=17. Waiting times are A=8, B=10, C=4, D=9. Average waiting time = 31/4 = 7.75.",
      reference: "IT0035 Module 2 — Round Robin Scheduling; Quantum = 3"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "Shortest Job First (SJF) Non-preemptive\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["7.75", "8.5", "8.75", "8"],
      correctAnswer: 2,
      explanation: "Non-preemptive SJF runs A(0-4), C(4-6), D(6-11), then B(11-20). The turnaround times are A=4, B=19, C=4, and D=8. Average = 35/4 = 8.75.",
      reference: "IT0035 Module 2 — Non-preemptive Shortest Job First"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "First-Come First-Served (FCFS)\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["10.5", "11.5", "11", "11.25"],
      correctAnswer: 1,
      explanation: "FCFS completion times are 4, 13, 15, and 20. Subtracting the arrival times gives turnaround times of 4, 12, 13, and 17. Average = 46/4 = 11.5.",
      reference: "IT0035 Module 2 — FCFS and Turnaround Time"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "Shortest Job First (SJF) Non-preemptive\n\nWhat is the correct sequence of the process when served by the CPU?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["ACBD", "ACDB", "ABCD", "ADBC"],
      correctAnswer: 1,
      explanation: "A is the only available process at time 0, so it runs to completion. At time 4, available bursts are B=9, C=2, D=5. C is shortest, followed by D and B. The order is ACDB.",
      reference: "IT0035 Module 2 — Non-preemptive Shortest Job First"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Round Robin (RR) where quantum = 3\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["12.5", "12", "12.75", "11.75"],
      correctAnswer: 2,
      explanation: "With quantum 3, completion times are A=12, B=20, C=8, D=17. Their turnaround times are A=12, B=19, C=6, D=14. Average = 51/4 = 12.75.",
      reference: "IT0035 Module 2 — Round Robin Scheduling"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Priority (Non-pre-emptive)\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["9.5", "9", "9.25", "8.5"],
      correctAnswer: 0,
      explanation: "The non-preemptive priority schedule is A(0-4), D(4-9), C(9-11), B(11-20). Turnaround times are A=4, B=19, C=9, and D=6. Average = 38/4 = 9.5.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT) pre-emptive\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["3.25", "3.5", "4", "3.75"],
      correctAnswer: 3,
      explanation: "Under SRT, A continues at time 2 because its remaining 2 units tie with newly arrived C's 2 units; an equal remaining time does not force preemption. Execution order is A-C-D-B. Waiting times are A=0, B=10, C=2, D=3. Average = 15/4 = 3.75.",
      reference: "IT0035 Module 2 — Shortest Remaining Time; Equal-Burst Tie Convention"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "Shortest Job First (SJF) Non-pre-emptive\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["4", "3.5", "3.75", "4.5"],
      correctAnswer: 2,
      explanation: "SJF order is A-C-D-B. Waiting times are A=0, B=10, C=2, and D=3. Their average is (0+10+2+3)/4 = 3.75.",
      reference: "IT0035 Module 2 — Non-preemptive SJF Waiting Time"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "Priority (Non-pre-emptive)\n\nWhat is the correct sequence of the process when served by the CPU?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["DCAB", "CADB", "ADCB", "ABCD"],
      correctAnswer: 2,
      explanation: "A runs from 0 to 4 because non-preemptive scheduling does not interrupt it. D has highest priority among waiting processes, followed by C and B. Therefore the order is ADCB.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Scheduling"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "Priority (Non-pre-emptive)\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["4.5", "4.75", "5.5", "4"],
      correctAnswer: 0,
      explanation: "CORRECTED ANSWER: Schedule A(0-4), D(4-9), C(9-11), B(11-20). Waiting times are A=0, B=10, C=7, D=1. Average = (0+10+7+1)/4 = 4.5, not 4.75.",
      reference: "IT0035 Module 2 — Non-preemptive Priority Waiting Time"
    },
    {
      id: "q14",
      type: "multiple_choice",
      question: "First-Come First-Served (FCFS)\n\nWhat is the correct sequence of the process when served by the CPU?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["ADBC", "ACBD", "ABCD", "DCBA"],
      correctAnswer: 2,
      explanation: "FCFS serves processes by arrival order. A arrives at 0, B at 1, C at 2, and D at 3, so the order is ABCD.",
      reference: "IT0035 Module 2 — First-Come First-Served Scheduling"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT) pre-emptive\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["7.75", "8", "8.75", "8.5"],
      correctAnswer: 2,
      explanation: "Under SRT with the existing-process tie convention, completion times are A=4, C=6, D=11, B=20. Their turnaround times are A=4, B=19, C=4, D=8, giving 35/4 = 8.75.",
      reference: "IT0035 Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "Priority (Pre-emptive)\n\nWhat is the average waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["5.5", "5", "5.25", "4.5"],
      correctAnswer: 0,
      explanation: "The preemptive priority completion times are A=11, B=20, C=9, D=8. Waiting time = completion - arrival - burst. The waiting times are 7, 10, 5, and 0, averaging 22/4 = 5.5.",
      reference: "IT0035 Module 2 — Preemptive Priority Waiting Time"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "Round Robin (RR) where quantum = 3\n\nWhat is the correct sequence of the process when served by the CPU?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["ABCDABDB", "ABCDAB", "ABCDABDC", "ABCDABDA"],
      correctAnswer: 0,
      explanation: "With quantum 3 and arrivals queued before the expired process is requeued, the CPU executes A(0-3), B(3-6), C(6-8), D(8-11), A(11-12), B(12-15), D(15-17), and B(17-20). The sequence is ABCDABDB.",
      reference: "IT0035 Module 2 — Round Robin Scheduling; Quantum = 3"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT) pre-emptive\n\nWhat is the correct sequence of the process when served by the CPU?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcd.png",
      options: ["ACDB", "ABCD", "ACBD", "CADB"],
      correctAnswer: 0,
      explanation: "CORRECTED ANSWER: At time 2, A has 2 time units remaining and C arrives with a 2-unit burst; the currently running A continues on this tie. A finishes at 4, followed by C(4-6), D(6-11), and B(11-20). The sequence is ACDB.",
      reference: "IT0035 Module 2 — SRT; Equal-Remaining-Time Tie Convention"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "Non-Pre-emptive Shortest Job First (SJF)\n\nWhat is the average Turn Around Time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcdef.png",
      options: ["9", "8", "7.5", "5"],
      correctAnswer: 2,
      explanation: "SJF runs A(0-5), B(5-6), D(6-9), F(9-11), E(11-15), C(15-23). Turnaround times A-F are 5, 4, 20, 5, 8, 3. Average = 45/6 = 7.5.",
      reference: "IT0035 Module 2 — Non-preemptive SJF Scheduling"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT)\n\nWhich process executed last?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcdef.png",
      options: ["B", "A", "C", "D"],
      correctAnswer: 2,
      explanation: "The shortest-remaining-time schedule finishes the longer-running C last, at time 23. The other jobs finish before C.",
      reference: "IT0035 Module 2 — Shortest Remaining Time Scheduling"
    },
    {
      id: "q21",
      type: "multiple_choice",
      question: "Non-Pre-emptive Shortest Job First (SJF)\n\nWhat is the Waiting Time of Process D?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcdef.png",
      options: ["5", "2", "12", "0"],
      correctAnswer: 1,
      explanation: "Under non-preemptive SJF, D starts at time 6 and arrived at time 4. Waiting time = 6 - 4 = 2.",
      reference: "IT0035 Module 2 — Non-preemptive Shortest Job First"
    },
    {
      id: "q22",
      type: "multiple_choice",
      question: "Shortest Remaining Time (SRT)\n\nWhat is the Turn Around Time of Process B?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m02-sw01-processes-abcdef.png",
      options: ["11", "3", "20", "1"],
      correctAnswer: 3,
      explanation: "B arrives at time 2 with a one-unit CPU burst. It preempts A and finishes at time 3. Turnaround time = completion - arrival = 3 - 2 = 1.",
      reference: "IT0035 Module 2 — Shortest Remaining Time and Turnaround Time"
    }
  ]
});
