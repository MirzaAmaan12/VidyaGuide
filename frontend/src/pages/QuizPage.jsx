import { useState } from 'react'
import { CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react'

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState('all')

  const quizzes = [
    {
      id: 1,
      category: 'Python',
      question: 'What is the output of: print(2 ** 3)?',
      options: ['6', '8', '9', '5'],
      correct: 1,
      explanation: '** is the exponentiation operator. 2 to the power of 3 equals 8.'
    },
    {
      id: 2,
      category: 'Python',
      question: 'Which of these is NOT a Python data type?',
      options: ['Dictionary', 'Array', 'Set', 'Tuple'],
      correct: 1,
      explanation: 'Python does not have a built-in "Array" type. It uses lists instead.'
    },
    {
      id: 3,
      category: 'Python',
      question: 'What does the len() function do?',
      options: ['Measures length of code', 'Returns the size of an object', 'Lengthens a string', 'Launches an event'],
      correct: 1,
      explanation: 'len() returns the number of elements in an object like strings, lists, and dictionaries.'
    },
    {
      id: 4,
      category: 'Data Structures',
      question: 'What is the time complexity of accessing an element in an array?',
      options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
      correct: 2,
      explanation: 'Accessing an array element by index takes constant time O(1) regardless of array size.'
    },
    {
      id: 5,
      category: 'Data Structures',
      question: 'Which data structure uses LIFO (Last In First Out)?',
      options: ['Queue', 'Stack', 'Array', 'Tree'],
      correct: 1,
      explanation: 'Stack follows LIFO principle: the last element added is removed first.'
    },
    {
      id: 6,
      category: 'Data Structures',
      question: 'What is the average time complexity of searching in a Binary Search Tree?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correct: 2,
      explanation: 'In a balanced BST, searching takes O(log n) time on average.'
    },
    {
      id: 7,
      category: 'AI Concepts',
      question: 'What is Machine Learning?',
      options: ['Programming computers manually', 'Systems learning from data without explicit programming', 'Only for robots', 'A type of software'],
      correct: 1,
      explanation: 'ML is a subset of AI where systems learn and improve from experience without being explicitly programmed.'
    },
    {
      id: 8,
      category: 'AI Concepts',
      question: 'Which of these is a supervised learning task?',
      options: ['Clustering', 'Classification', 'Dimensionality reduction', 'Anomaly detection'],
      correct: 1,
      explanation: 'Classification is supervised learning - we have labeled data with correct answers to train on.'
    },
    {
      id: 9,
      category: 'AI Concepts',
      question: 'What does a Neural Network mimic?',
      options: ['Computer circuits', 'The human brain', 'Database structure', 'Web servers'],
      correct: 1,
      explanation: 'Neural networks are inspired by biological neural networks in animal brains.'
    },
    {
      id: 10,
      category: 'Databases',
      question: 'What does SQL stand for?',
      options: ['Simple Question Language', 'Structured Query Language', 'System Quality Logic', 'Sequential Query Layout'],
      correct: 1,
      explanation: 'SQL = Structured Query Language, used to query and manage relational databases.'
    },
    {
      id: 11,
      category: 'Databases',
      question: 'Which SQL keyword is used to filter records?',
      options: ['SORT', 'FILTER', 'WHERE', 'FIND'],
      correct: 2,
      explanation: 'The WHERE clause is used to filter records based on specified conditions.'
    },
    {
      id: 12,
      category: 'Databases',
      question: 'What is database normalization?',
      options: ['Making data look normal', 'Organizing data to reduce redundancy', 'Backup process', 'Creating backups'],
      correct: 1,
      explanation: 'Normalization is a process to organize database design to reduce data redundancy.'
    },
    {
      id: 13,
      category: 'Web Development',
      question: 'What does HTML stand for?',
      options: ['Hyper Tool Markup Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
      correct: 1,
      explanation: 'HTML = HyperText Markup Language, the standard markup language for web pages.'
    },
    {
      id: 14,
      category: 'Web Development',
      question: 'What is the purpose of CSS?',
      options: ['To create interactivity', 'To style and layout web pages', 'To manage databases', 'To create server logic'],
      correct: 1,
      explanation: 'CSS (Cascading Style Sheets) is used to style and layout web pages.'
    },
    {
      id: 15,
      category: 'Web Development',
      question: 'What is React?',
      options: ['A programming language', 'A JavaScript library for building UIs', 'A database tool', 'A server framework'],
      correct: 1,
      explanation: 'React is a JavaScript library developed by Facebook for building user interfaces.'
    },
    {
      id: 16,
      category: 'Python',
      question: 'What is a list comprehension in Python?',
      options: ['Reading entire lists', 'A concise way to create lists', 'List comments', 'Comparing lists'],
      correct: 1,
      explanation: 'List comprehension is a concise and elegant way to create lists from existing sequences.'
    },
    {
      id: 17,
      category: 'Data Structures',
      question: 'What is the time complexity of inserting at the beginning of a linked list?',
      options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'],
      correct: 1,
      explanation: 'Inserting at the beginning of a linked list is O(1) - constant time operation.'
    },
    {
      id: 18,
      category: 'AI Concepts',
      question: 'What is overfitting in Machine Learning?',
      options: ['Training too slowly', 'Model learning noise in training data', 'Using too much RAM', 'Incorrect algorithm'],
      correct: 1,
      explanation: 'Overfitting occurs when a model learns the training data too well, including its noise.'
    },
    {
      id: 19,
      category: 'Databases',
      question: 'What is a PRIMARY KEY in databases?',
      options: ['The main column', 'Uniquely identifies each record', 'The first table', 'A backup key'],
      correct: 1,
      explanation: 'A PRIMARY KEY uniquely identifies each record in a table and ensures data integrity.'
    },
    {
      id: 20,
      category: 'Web Development',
      question: 'What does REST API stand for?',
      options: ['Restrictive Error System Transfer', 'Representational State Transfer API', 'Resource Setup Transfer', 'Remote End System'],
      correct: 1,
      explanation: 'REST = Representational State Transfer, an architectural style for designing networked applications.'
    }
  ]

  const categories = ['all', ...new Set(quizzes.map(q => q.category))]
  const filteredQuizzes = categoryFilter === 'all' ? quizzes : quizzes.filter(q => q.category === categoryFilter)
  const currentQ = filteredQuizzes[currentQuestion]

  const handleAnswerClick = (index) => {
    if (answered) return
    setSelectedAnswer(index)
    setAnswered(true)
    if (index === currentQ.correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < filteredQuizzes.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowScore(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswer(null)
    setAnswered(false)
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">❓ Quiz</h1>
        <p className="text-gray-600 text-lg">Test your knowledge with multiple-choice questions across various topics</p>
      </div>

      {showScore ? (
        <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 text-center">
          <div className="mb-6">
            <Award className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed! 🎉</h2>
            <p className="text-gray-600 mb-4">Great job! Here's your score:</p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {Math.round((score / filteredQuizzes.length) * 100)}%
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-2">
              {score} out of {filteredQuizzes.length}
            </p>
            <div className="text-gray-600">
              {score / filteredQuizzes.length >= 0.8 ? '🌟 Excellent work!' : 
               score / filteredQuizzes.length >= 0.6 ? '👍 Good effort!' : 
               '💪 Keep practicing!'}
            </div>
          </div>

          <button 
            onClick={resetQuiz}
            className="btn-primary w-full py-3 font-bold flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" /> Try Again
          </button>
        </div>
      ) : (
        <div>
          {/* Category Filter */}
          <div className="mb-6">
            <p className="text-gray-600 font-semibold mb-3">Filter by category:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategoryFilter(cat)
                    setCurrentQuestion(0)
                    setScore(0)
                    setSelectedAnswer(null)
                    setAnswered(false)
                  }}
                  className={`px-4 py-2 rounded-full font-semibold transition ${
                    categoryFilter === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Question Card */}
          <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-600">
                  Question {currentQuestion + 1} of {filteredQuizzes.length}
                </p>
                <div className="w-64 bg-gray-300 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${((currentQuestion + 1) / filteredQuizzes.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-xl font-bold text-blue-600">Score: {score}</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentQ?.question}</h2>

            <div className="space-y-3 mb-6">
              {currentQ?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={answered}
                  className={`w-full p-4 text-left rounded-lg font-semibold transition ${
                    selectedAnswer === index
                      ? index === currentQ.correct
                        ? 'bg-green-100 border-2 border-green-500 text-green-700'
                        : 'bg-red-100 border-2 border-red-500 text-red-700'
                      : answered && index === currentQ.correct
                      ? 'bg-green-100 border-2 border-green-500 text-green-700'
                      : 'bg-white border-2 border-gray-300 hover:border-blue-500 text-gray-900 cursor-pointer'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? index === currentQ.correct ? 'border-green-500 bg-green-500' : 'border-red-500 bg-red-500'
                        : answered && index === currentQ.correct
                        ? 'border-green-500 bg-green-500'
                        : 'border-gray-400'
                    }`}>
                      {selectedAnswer === index && index === currentQ.correct && <CheckCircle className="w-4 h-4 text-white" />}
                      {selectedAnswer === index && index !== currentQ.correct && <XCircle className="w-4 h-4 text-white" />}
                    </div>
                    {option}
                  </div>
                </button>
              ))}
            </div>

            {answered && (
              <div className={`p-4 rounded-lg mb-6 ${selectedAnswer === currentQ.correct ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'}`}>
                <p className="font-semibold text-gray-900 mb-2">💡 Explanation:</p>
                <p className="text-gray-700">{currentQ?.explanation}</p>
              </div>
            )}

            {answered && (
              <button
                onClick={handleNext}
                className="btn-primary w-full py-3 font-bold"
              >
                {currentQuestion + 1 === filteredQuizzes.length ? 'Show Results' : 'Next Question'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
