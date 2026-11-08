
window.PandoraQuizzes.register({
  id: "IT0035-M03-F03",
  subject: "IT0035",
  module: 3,
  title: "Formative Assessment 3",
  kind: "formative",
  version: 1,
  description: "20-question assessment covering variable partitioning with compaction, memory allocation, paging, address translation, and memory management. Original score: 19/20.",
  createdAt: "2026-11-07T02:52:25+08:00",
  showOnHome: true,

  questions: [
    {
      id: "q1",
      type: "multiple_choice",
      question: "Complete the table below using Multiple Relocatable Variable Partitioning (w/ compaction)\n\nGiven:\nOS size = 56 K\nMemory Size = 256 K\n\nWhat job has the longest waiting time?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-compaction-five-jobs.png",
      options: ["J2", "J4", "J3", "J5"],
      correctAnswer: 3,
      explanation: "Available user memory is 256 - 56 = 200 K. J1 starts at 12:00, J2 at 12:05, J3 at 12:10, J4 at 12:20, and J5 at 12:25. J5 arrived at 12:12, so its waiting time is 13 minutes, longer than the other jobs.",
      reference: "IT0035 Module 3 — Multiple Relocatable Variable Partitioning with Compaction; FA3 Q1"
    },
    {
      id: "q2",
      type: "multiple_choice",
      question: "Required: Complete the table below using Variable Partitioning with compaction.\n\nGiven:\nOS size = 300 K\nMemory Size = 1024 K\n\nAt what time did J3 terminate?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-compaction-eight-jobs.png",
      options: ["9:08", "9:04", "9:13", "9:10"],
      correctAnswer: 3,
      explanation: "Available user memory is 724 K. J1 occupies 450 K at 9:00 and J2 occupies 200 K at 9:02. J3 arrives at 9:03 but must wait until J2 finishes at 9:04. J3 then runs for 6 minutes, terminating at 9:10.",
      reference: "IT0035 Module 3 — Variable Partitioning with Compaction; FA3 Q2"
    },
    {
      id: "q3",
      type: "multiple_choice",
      question: "Complete the table below using Multiple Relocatable Variable Partitioning (w/ compaction)\n\nGiven:\nOS size = 56 K\nMemory Size = 256 K\n\nWhat is the waiting time in minutes of Job 5?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-compaction-five-jobs.png",
      options: ["6", "10", "8", "13"],
      correctAnswer: 3,
      explanation: "J5 arrives at 12:12 and requires 170 K. At 12:20, J2 finishes but J3 and J4 together occupy 70 K, leaving only 130 K. When J3 finishes at 12:25, 180 K becomes available. J5 starts at 12:25, so waiting time = 12:25 - 12:12 = 13 minutes.",
      reference: "IT0035 Module 3 — Variable Partitioning, Waiting Time; FA3 Q3"
    },
    {
      id: "q4",
      type: "multiple_choice",
      question: "Required: Complete the table below using Variable Partitioning with compaction.\n\nGiven:\nOS size = 300 K\nMemory Size = 1024 K\n\nWhat is the waiting time in minutes of Job 7?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-compaction-eight-jobs.png",
      options: ["5", "3", "4", "6"],
      correctAnswer: 3,
      explanation: "J7 requires 160 K and arrives at 9:13. At that time J5 occupies 400 K and J6 occupies 280 K, leaving 44 K free. J5 finishes at 9:19, releasing enough memory to allocate J7. Waiting time = 9:19 - 9:13 = 6 minutes.",
      reference: "IT0035 Module 3 — Variable Partitioning, Waiting Time; FA3 Q4"
    },
    {
      id: "q5",
      type: "multiple_choice",
      question: "Complete the table below using Multiple Relocatable Variable Partitioning (w/ compaction)\n\nGiven:\nOS size = 56 K\nMemory Size = 256 K\n\nWhich job ended at 12:40?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-compaction-five-jobs.png",
      options: ["J3", "J1", "J5", "J4"],
      correctAnswer: 3,
      explanation: "J4 arrives at 12:10, requires 20 K, and starts at 12:20 after sufficient memory becomes available. Its run time is 20 minutes, so J4 finishes at 12:40.",
      reference: "IT0035 Module 3 — Variable Partitioning, Job Completion Times; FA3 Q5"
    },
    {
      id: "q6",
      type: "multiple_choice",
      question: "Required: Complete the table below using Variable Partitioning with compaction.\n\nGiven:\nOS size = 300 K\nMemory Size = 1024 K\n\nAt what time was J5 allocated in the memory?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-compaction-eight-jobs.png",
      options: ["9:10", "9:04", "9:09", "9:15"],
      correctAnswer: 0,
      explanation: "J5 arrives at 9:09 and needs 400 K. At that time J3 and J4 occupy 120 K and 315 K, leaving only 289 K of the 724 K user-memory area. When J3 finishes at 9:10, available memory increases to 409 K, allowing J5 to start at 9:10.",
      reference: "IT0035 Module 3 — Variable Partitioning with Compaction; FA3 Q6"
    },
    {
      id: "q7",
      type: "multiple_choice",
      question: "Required: Complete the table below using Variable Partitioning with compaction.\n\nGiven:\nOS size = 300 K\nMemory Size = 1024 K\n\nAt what time did J7 terminate?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-compaction-eight-jobs.png",
      options: ["9:14", "9:13", "9:22", "9:21"],
      correctAnswer: 3,
      explanation: "J7 is allocated at 9:19 after J5 releases memory. With a run time of 2 minutes, J7 finishes at 9:21.",
      reference: "IT0035 Module 3 — Variable Partitioning, Job Completion Times; FA3 Q7"
    },
    {
      id: "q8",
      type: "multiple_choice",
      question: "Required: Complete the table below using Variable Partitioning with compaction.\n\nGiven:\nOS size = 300 K\nMemory Size = 1024 K\n\nAt what time was J3 allocated in the memory?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-compaction-eight-jobs.png",
      options: ["9:09", "9:04", "9:10", "9:15"],
      correctAnswer: 1,
      explanation: "CORRECTED ANSWER: J3 arrives at 9:03 and requires 120 K, but J1 and J2 occupy 650 K of the available 724 K. At 9:04, J2 finishes and releases 200 K, making enough space for J3. Thus J3 is allocated at 9:04, not the originally selected 9:09.",
      reference: "IT0035 Module 3 — Variable Partitioning with Compaction; Original FA3 Q8"
    },
    {
      id: "q9",
      type: "multiple_choice",
      question: "Required: Complete the table below using Variable Partitioning with compaction.\n\nGiven:\nOS size = 300 K\nMemory Size = 1024 K\n\nAt what time was J8 allocated in the memory?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-compaction-eight-jobs.png",
      options: ["9:19", "9:22", "9:14", "9:10"],
      correctAnswer: 0,
      explanation: "J8 arrives at 9:14 and needs 270 K, but the system cannot allocate it immediately. At 9:19, J5 finishes and releases 400 K. J7 needs 160 K, so the 724 K memory can accommodate J6 (280 K), J7 (160 K), and J8 (270 K), totaling 710 K. J8 therefore starts at 9:19.",
      reference: "IT0035 Module 3 — Variable Partitioning with Compaction; FA3 Q9"
    },
    {
      id: "q10",
      type: "multiple_choice",
      question: "Complete the table below using Multiple Relocatable Variable Partitioning (w/ compaction)\n\nGiven:\nOS size = 56 K\nMemory Size = 256 K\n\nHow much is the memory available after J5 was allocated in the memory?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-compaction-five-jobs.png",
      options: ["50K", "10K", "30K", "70K"],
      correctAnswer: 1,
      explanation: "Total user memory is 200 K. At 12:25, J3 has finished, J4 still occupies 20 K, and J5 receives 170 K. Remaining available memory = 200 - 20 - 170 = 10 K.",
      reference: "IT0035 Module 3 — Variable Partitioning, Available Memory; FA3 Q10"
    },
    {
      id: "q11",
      type: "multiple_choice",
      question: "In dynamic partitions, which memory allocation scheme allots the largest free available block to the new job?",
      options: ["Best-fit", "First-First-fit", "Worst-fit", "Next-fit"],
      correctAnswer: 2,
      explanation: "Worst-fit chooses the largest available free block for allocation. Best-fit selects the smallest suitable block, first-fit selects the first suitable block, and next-fit continues searching from a previous position.",
      reference: "IT0035 Module 3 — Dynamic Partition Allocation Strategies"
    },
    {
      id: "q12",
      type: "multiple_choice",
      question: "It refers to a collection of processes that are residing in main memory and are ready and waiting to execute",
      options: ["job queue", "device queue", "ready queue", "thread queue"],
      correctAnswer: 2,
      explanation: "The ready queue contains processes resident in main memory that can execute once they receive CPU time. Processes waiting for specific devices are placed in device or I/O waiting queues.",
      reference: "IT0035 Module 2 — Scheduling Queues"
    },
    {
      id: "q13",
      type: "multiple_choice",
      question: "A hardware device that performs the run-time mapping from logical to physical addresses",
      options: ["Control unit", "Page table", "Arithmetic logic unit", "Memory management unit"],
      correctAnswer: 3,
      explanation: "The Memory Management Unit (MMU) is the hardware responsible for translating logical or virtual addresses into physical addresses during program execution.",
      reference: "IT0035 Module 3 — Address Binding and Memory Management Unit"
    },
    {
      id: "q14",
      type: "true_false",
      question: "In paging, the OS divides main memory into fixed-sized blocks called frames",
      correctAnswer: true,
      explanation: "Paging divides physical memory into fixed-size frames and a process's logical memory into pages of the same size. A page table records which frame holds each page.",
      reference: "IT0035 Module 3 — Paging"
    },
    {
      id: "q15",
      type: "multiple_choice",
      question: "In this process, if a new hole is adjacent to other holes, the system merges these adjacent holes to form one larger hole.",
      options: ["paging", "compaction", "coalescing", "scheduling"],
      correctAnswer: 2,
      explanation: "Coalescing combines adjacent free memory holes into one larger contiguous block. Compaction differs because it relocates allocated memory to consolidate separated free regions.",
      reference: "IT0035 Module 3 — Coalescing and Compaction"
    },
    {
      id: "q16",
      type: "multiple_choice",
      question: "Given:\nPage or frame size = 2 bytes\nNo. of process page = 8 pages\nNo. of memory frames = 16 frames\n\nWhat is the physical address of letter \"A\"?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-paging-map.png",
      options: ["18", "28", "24", "14"],
      correctAnswer: 3,
      explanation: "Letter A belongs to page 0 at offset 0. The page table maps page 0 to frame 7. Physical address = frame number × frame size + offset = 7 × 2 + 0 = 14.",
      reference: "IT0035 Module 3 — Paging Address Translation; FA3 Q16 Diagram"
    },
    {
      id: "q17",
      type: "multiple_choice",
      question: "Given:\nPage or frame size = 2 bytes\nNo. of process page = 8 pages\nNo. of memory frames = 16 frames\n\nAccording to the page table, page 1 is mapped to what frame?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-paging-map.png",
      options: ["5", "6", "3", "4"],
      correctAnswer: 2,
      explanation: "The page table entry for page 1 is frame 3. The mapping identifies where the page is stored in physical memory.",
      reference: "IT0035 Module 3 — Page Tables; FA3 Q17 Diagram"
    },
    {
      id: "q18",
      type: "multiple_choice",
      question: "Given:\nPage or frame size = 2 bytes\nNo. of process page = 8 pages\nNo. of memory frames = 16 frames\n\nAccording to the page table, page 0 is mapped to what frame?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-paging-map.png",
      options: ["6", "1", "7", "2"],
      correctAnswer: 2,
      explanation: "The page table maps logical page 0 to physical frame 7. Therefore, 7 is the correct frame number.",
      reference: "IT0035 Module 3 — Page Tables; FA3 Q18 Diagram"
    },
    {
      id: "q19",
      type: "multiple_choice",
      question: "Use the given figure below\n\nWhat is the physical address of letter \"g\" in binary value?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-paging-letter-g.png",
      options: ["1111", "11010", "00110", "11011"],
      correctAnswer: 1,
      explanation: "Each logical page holds four letters. Letter g has logical address 6, so it is on page 1 with offset 2. The page table maps page 1 to physical frame 6. Physical address = 6 × 4 + 2 = 26, which is 11010 in binary.",
      reference: "IT0035 Module 3 — Logical-to-Physical Address Translation; FA3 Q19 Diagram"
    },
    {
      id: "q20",
      type: "multiple_choice",
      question: "Given:\nPage or frame size = 2 bytes\nNo. of process page = 8 pages\nNo. of memory frames = 16 frames\n\nWhat is the physical address of letter \"D\"?",
      image: "./SUBJECTS/quizzes/IT0035/imgs/m03-f03-paging-map.png",
      options: ["7", "24", "28", "11"],
      correctAnswer: 0,
      explanation: "Letter D is on logical page 1 at offset 1. Page 1 maps to physical frame 3. Physical address = 3 × 2 + 1 = 7.",
      reference: "IT0035 Module 3 — Paging Address Translation; FA3 Q20 Diagram"
    }
  ]
});
