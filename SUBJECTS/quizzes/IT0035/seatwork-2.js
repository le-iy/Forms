
window.PandoraQuizzes.register({
  id: "IT0035-M03-SW02",
  subject: "IT0035",
  module: 3,
  title: "Seatwork 2",
  kind: "practice",
  version: 1,
  description: "10-question seatwork on variable partitioning with and without compaction, including memory allocation, job completion, and waiting times. Original score: 20/20.",
  createdAt: "2026-11-07T01:00:00+08:00",
  showOnHome: true,
  
  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Variable Partitioning with compaction.\n\nWhat was the memory available when J3 was allocated?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-sw02-variable-partitioning-table.png",
      options: ["90", "300", "100", "235"],
      correctAnswer: 0,
      explanation: "The available user memory is 1024 K - 224 K = 800 K. J1 and J2 initially occupy 175 K and 210 K. When J1 finishes at 8:40, compaction can combine its released 175 K with the remaining 415 K, giving 590 K. J3 requires 500 K, so 590 K - 500 K = 90 K remains immediately after J3 is allocated, before J4 is allocated.",
      reference: "IT0035 — Memory Management: Variable Partitioning with Compaction; Seatwork 2, Question 1"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "Variable Partitioning with compaction.\n\nWhich job ended at 10:15?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-sw02-variable-partitioning-table.png",
      options: ["Job 5", "Job 4", "Job 3", "Job 2"],
      correctAnswer: 0,
      explanation: "Job 5 requires 200 K and has a run time of 70 minutes. Under the given allocation schedule, it starts at 9:05 and finishes 70 minutes later, at 10:15.",
      reference: "IT0035 — Variable Partitioning with Compaction; Job Start and Finish Times"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "Variable Partitioning without compaction\n\nWhich job has the shortest waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-sw02-variable-partitioning-table.png",
      options: ["Job 1 and 2", "Job 1", "Job 2", "Job 5"],
      correctAnswer: 0,
      explanation: "Jobs 1 and 2 both arrive at 8:00 and fit into the available 800 K of user memory. They can be allocated immediately, so each has a waiting time of zero minutes. They tie for the shortest waiting time.",
      reference: "IT0035 — Variable Partitioning without Compaction; Waiting Time"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Variable Partitioning without compaction\n\nHow much is the total memory available?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-sw02-variable-partitioning-table.png",
      options: ["800", "1024", "224", "None of these"],
      correctAnswer: 0,
      explanation: "The total physical memory is 1024 K, but 224 K is reserved for the operating system. Therefore, the memory available for job allocation is 1024 K - 224 K = 800 K.",
      reference: "IT0035 — Memory Management; Available User Memory"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "Variable Partitioning with compaction.\n\nAt what time did all the jobs finish their execution?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-sw02-variable-partitioning-table.png",
      options: ["10:45", "11:10", "11:00", "10:30"],
      correctAnswer: 0,
      explanation: "With compaction, J3 can be allocated at 8:40 after J1 releases memory and the free space is consolidated. J3 runs for 125 minutes, finishing at 10:45. It is the last job to finish, so all jobs have completed by 10:45.",
      reference: "IT0035 — Variable Partitioning with Compaction; Job Completion Times"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "Variable Partitioning with compaction.\n\nWhat is the waiting time in minutes of Job 4?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-sw02-variable-partitioning-table.png",
      options: ["20", "25", "5", "30"],
      correctAnswer: 0,
      explanation: "Job 4 arrives at 8:20 but begins at 8:40 according to the allocation order used in the problem. Waiting time = start time - arrival time = 8:40 - 8:20 = 20 minutes.",
      reference: "IT0035 — Variable Partitioning with Compaction; Waiting Time"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "Variable Partitioning without compaction\n\nHow much is the memory available after J3 was allocated in the memory?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-sw02-variable-partitioning-table.png",
      options: ["300", "90", "415", "None of these"],
      correctAnswer: 0,
      explanation: "The initial allocatable memory is 800 K. Under the non-compaction schedule, J3 occupies 500 K when sufficient contiguous space becomes available. At that point, 300 K of user memory remains free in total, although it may be split into separate holes rather than one contiguous block.",
      reference: "IT0035 — Variable Partitioning without Compaction; External Fragmentation"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Variable Partitioning with compaction.\n\nWhich job has the earliest finish time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-sw02-variable-partitioning-table.png",
      options: ["Job 1", "Job 2", "Job 3", "Job 4"],
      correctAnswer: 0,
      explanation: "Job 1 arrives at 8:00, starts immediately, and runs for 40 minutes. Its finish time is 8:40, earlier than the finish times of the other jobs.",
      reference: "IT0035 — Variable Partitioning with Compaction; Completion Times"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Variable Partitioning without compaction\n\nAt what time did all the jobs finish their execution?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-sw02-variable-partitioning-table.png",
      options: ["11:10", "11:15", "10:15", "None of these"],
      correctAnswer: 0,
      explanation: "Without compaction, J3 must wait until a contiguous block of at least 500 K becomes available. In the problem's allocation schedule, it starts at 9:05 and runs for 125 minutes, completing at 11:10. This is the latest finish time.",
      reference: "IT0035 — Variable Partitioning without Compaction; Job Completion Times"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Variable Partitioning without compaction\n\nWhich job has the longest waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-sw02-variable-partitioning-table.png",
      options: ["Job 3", "Job 4", "Job 5", "None of these"],
      correctAnswer: 0,
      explanation: "Job 3 arrives at 8:15 and cannot start until 9:05 because its 500 K requirement needs a sufficiently large contiguous region. Its waiting time is 50 minutes, longer than the other jobs' waiting times.",
      reference: "IT0035 — Variable Partitioning without Compaction; Waiting Time and External Fragmentation"
    }
  ]
});
