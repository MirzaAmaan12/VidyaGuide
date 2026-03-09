import { useState } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

export default function InterviewPage() {
  const [expandedId, setExpandedId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const interviewQuestions = [
    {
      id: 1,
      category: 'Python',
      question: 'Explain the difference between `list` and `tuple` in Python.',
      answer: 'Tuples are immutable (unchangeable) while lists are mutable (changeable). Tuples use parentheses () and lists use square brackets []. Tuples are faster and can be used as dictionary keys, while lists cannot. Use tuples when data should not be modified; use lists when you need to modify data.',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      category: 'Data Structures',
      question: 'What is the difference between a Stack and a Queue?',
      answer: 'A Stack follows LIFO (Last In First Out) - like a stack of plates. A Queue follows FIFO (First In First Out) - like a line at a store. Stacks use push/pop operations; Queues use enqueue/dequeue. Stacks are used for undo features, DFS; Queues are used for BFS, CPU scheduling.',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      category: 'Algorithms',
      question: 'Explain the concept of Big O notation.',
      answer: 'Big O notation describes how an algorithm\'s performance scales with input size. O(1) = constant time, O(n) = linear, O(n²) = quadratic, O(log n) = logarithmic, O(n log n) = linearithmic. It helps compare algorithms and predict performance on large inputs. Always analyze worst-case scenario.',
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      category: 'Algorithms',
      question: 'What is a Binary Search Tree (BST)?',
      answer: 'A BST is a tree data structure where each node has at most two children. For any node, all values in left subtree are smaller and all values in right subtree are larger. This structure enables efficient searching, insertion, and deletion in O(log n) average time. Unbalanced BSTs can degrade to O(n).',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      category: 'System Design',
      question: 'What is horizontal vs vertical scaling?',
      answer: 'Vertical scaling = adding more power to a single server (more CPU, RAM). Horizontal scaling = adding more servers. Vertical scaling is simpler but limited by hardware. Horizontal scaling is more complex but infinitely scalable. Most modern systems use horizontal scaling with load balancing.',
      difficulty: 'Advanced'
    },
    {
      id: 6,
      category: 'System Design',
      question: 'Explain the concept of database sharding.',
      answer: 'Sharding is a database partitioning technique where data is distributed across multiple servers/databases. Each shard handles a subset of data (e.g., by user ID range). Benefits: improves scalability, reduces data per shard. Challenges: complex queries, data consistency, routing logic needed.',
      difficulty: 'Advanced'
    },
    {
      id: 7,
      category: 'AI/ML',
      question: 'What is the difference between supervised and unsupervised learning?',
      answer: 'Supervised learning uses labeled data with correct answers (e.g., classification, regression). Unsupervised learning finds patterns in unlabeled data (e.g., clustering, dimensionality reduction). Supervised needs labeled data but gives accurate predictions. Unsupervised discovers hidden patterns but less interpretable.',
      difficulty: 'Beginner'
    },
    {
      id: 8,
      category: 'AI/ML',
      question: 'What is overfitting and how do you prevent it?',
      answer: 'Overfitting occurs when a model learns training data too well, including noise, and fails on new data. Prevention: use regularization (L1/L2), cross-validation, reduce model complexity, increase training data, use dropout, early stopping. A balanced model generalizes well to unseen data.',
      difficulty: 'Intermediate'
    },
    {
      id: 9,
      category: 'Python',
      question: 'What are decorators in Python?',
      answer: 'Decorators are functions that modify other functions or classes without changing their source code. They use @decorator syntax. Common examples: @staticmethod, @classmethod, @property. You can create custom decorators using wrapper functions. They\'re useful for logging, authentication, timing.',
      difficulty: 'Intermediate'
    },
    {
      id: 10,
      category: 'Python',
      question: 'Explain list comprehension and give an example.',
      answer: 'List comprehension is a concise way to create lists from existing sequences. Example: [x*2 for x in range(5)] produces [0,2,4,6,8]. Syntax: [expression for item in iterable if condition]. More efficient than for loops and more readable. Can create dictionaries and sets too.',
      difficulty: 'Beginner'
    },
    {
      id: 11,
      category: 'Data Structures',
      question: 'What is a hash table and how does it handle collisions?',
      answer: 'Hash table uses a hash function to map keys to array indices for O(1) lookups. Collisions occur when two keys hash to same index. Handling methods: 1) Chaining = store collisions in linked lists, 2) Open addressing = find another empty slot. Choose based on load factor and memory usage.',
      difficulty: 'Intermediate'
    },
    {
      id: 12,
      category: 'Algorithms',
      question: 'What is Dynamic Programming? Give an example.',
      answer: 'Dynamic Programming solves problems by breaking them into smaller subproblems and storing results to avoid recomputation. Example: Fibonacci - instead of recalculating Fib(N) multiple times, store computed values. Techniques: memoization (top-down) or tabulation (bottom-up). Optimal for problems with overlapping subproblems.',
      difficulty: 'Advanced'
    },
    {
      id: 13,
      category: 'Web Development',
      question: 'What is the difference between REST and SOAP?',
      answer: 'REST uses HTTP methods (GET, POST, PUT, DELETE) and is stateless. SOAP uses XML and is more formal with complex specifications. REST is lighter, faster, cacheable. SOAP is more secure and reliable. REST used for web APIs; SOAP for enterprise services. REST is more popular today.',
      difficulty: 'Intermediate'
    },
    {
      id: 14,
      category: 'System Design',
      question: 'Explain the concept of load balancing.',
      answer: 'Load balancing distributes incoming requests across multiple servers to improve performance and availability. Methods: round-robin, least connections, IP hash, weighted distribution. Benefits: increased throughput, redundancy, fault tolerance. Can be hardware-based or software-based (e.g., Nginx, HAProxy).',
      difficulty: 'Intermediate'
    },
    {
      id: 15,
      category: 'Data Structures',
      question: 'What is a Linked List and its advantages over arrays?',
      answer: 'Linked List is a linear data structure where each node contains data and pointer to next node. Advantages: dynamic size, efficient insertion/deletion at any position (if you have reference). Disadvantages: O(n) access time, extra memory for pointers, no cache efficiency. Use when you need frequent insertion/deletion.',
      difficulty: 'Beginner'
    },
    {
      id: 16,
      category: 'AI/ML',
      question: 'What is a Neural Network and how does backpropagation work?',
      answer: 'Neural Network is inspired by biological neurons with layers of interconnected nodes. Backpropagation is training algorithm that calculates gradients and updates weights to minimize error. Forward pass: compute predictions. Backward pass: calculate gradients using chain rule and update weights. This enables learning from data.',
      difficulty: 'Advanced'
    },
    {
      id: 17,
      category: 'Algorithms',
      question: 'Explain merge sort and its time complexity.',
      answer: 'Merge sort is a divide-and-conquer algorithm: divide array in half, recursively sort, then merge. Time complexity: O(n log n) in all cases (best, average, worst). Space: O(n) for merging. Stable sort preserves order of equal elements. Preferred for large datasets and when consistent performance needed.',
      difficulty: 'Intermediate'
    },
    {
      id: 18,
      category: 'System Design',
      question: 'What is caching and different caching strategies?',
      answer: 'Caching stores frequently accessed data for faster retrieval. Strategies: LRU (Least Recently Used) - evict oldest accessed, LFU (Least Frequently Used) - evict least used, FIFO - evict oldest. Cache invalidation methods: TTL (time-based), event-based. Common tools: Redis, Memcached. Important for performance optimization.',
      difficulty: 'Intermediate'
    },
    {
      id: 19,
      category: 'Python',
      question: 'What are generators in Python and why use them?',
      answer: 'Generators are functions that use `yield` instead of `return`. They produce values one at a time and maintain state between calls. Benefits: memory efficient (don\'t store entire list), lazy evaluation, used in pipelines. Example: range() is a generator. Use when working with large datasets or infinite sequences.',
      difficulty: 'Intermediate'
    },
    {
      id: 20,
      category: 'Web Development',
      question: 'Explain JSON Web Tokens (JWT) and their benefits.',
      answer: 'JWT is a stateless authentication method. Structure: Header.Payload.Signature. Benefits: no server-side session storage, scalable, can be used across domains (CORS friendly), mobile-friendly. Payload contains claims. Verify signature to ensure token integrity. Used for secure API authentication.',
      difficulty: 'Intermediate'
    }
  ]

  const categories = ['All', ...new Set(interviewQuestions.map(q => q.category))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredQuestions = selectedCategory === 'All'
    ? interviewQuestions
    : interviewQuestions.filter(q => q.category === selectedCategory)

  const searchFiltered = filteredQuestions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700'
      case 'Intermediate': return 'bg-blue-100 text-blue-700'
      case 'Advanced': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">🎤 Interview Prep</h1>
        <p className="text-gray-600 text-lg">Master 20 common technical interview questions with detailed answers and explanations</p>
      </div>

      {/* Search */}
      <div className="card">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="card">
        <p className="text-gray-600 font-semibold mb-3">Filter by category:</p>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
          <p className="text-gray-600 text-sm">Total Questions</p>
          <p className="text-3xl font-bold text-blue-600">{interviewQuestions.length}</p>
        </div>
        <div className="card bg-gradient-to-br from-green-50 to-green-100">
          <p className="text-gray-600 text-sm">In This Category</p>
          <p className="text-3xl font-bold text-green-600">{searchFiltered.length}</p>
        </div>
        <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
          <p className="text-gray-600 text-sm">Difficulty Levels</p>
          <p className="text-3xl font-bold text-purple-600">3</p>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-3">
        {searchFiltered.map((q) => (
          <div
            key={q.id}
            className="card cursor-pointer hover:shadow-lg transition border-l-4 border-blue-500"
            onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(q.difficulty)}`}>
                    {q.difficulty}
                  </span>
                  <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {q.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{q.question}</h3>
              </div>
              {expandedId === q.id ? (
                <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0 ml-4" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
              )}
            </div>

            {expandedId === q.id && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-900 leading-relaxed">{q.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {searchFiltered.length === 0 && (
        <div className="card text-center py-12">
          <p className="text-gray-600 text-lg">No questions found. Try a different search term.</p>
        </div>
      )}

      {/* Tips */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-lg p-6">
        <h4 className="font-bold text-lg text-gray-900 mb-3">💡 Interview Tips</h4>
        <ul className="space-y-2 text-gray-700">
          <li>✅ <strong>Communicate clearly:</strong> Explain your thought process while solving</li>
          <li>✅ <strong>Ask clarifying questions:</strong> Understand requirements before coding</li>
          <li>✅ <strong>Test your solution:</strong> Walk through examples and edge cases</li>
          <li>✅ <strong>Discuss trade-offs:</strong> Show awareness of different approaches</li>
          <li>✅ <strong>Practice regularly:</strong> Use LeetCode, HackerRank for coding problems</li>
        </ul>
      </div>
    </div>
  )
}
