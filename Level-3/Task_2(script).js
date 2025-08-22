
        // Data for courses and quizzes
        const coursesData = [
            {
                id: 1,
                title: 'Introduction to React',
                description: 'Learn the fundamentals of building modern web applications with React.js.',
                instructor: 'Jane Doe',
                image: 'https://placehold.co/600x400/1e293b/fff?text=React',
                lessons: [
                    { id: 1, title: 'What is React?', videoUrl: 'https://www.youtube.com/embed/SgT2d-Q6Nmg', type: 'video' },
                    { id: 2, title: 'Components and Props', videoUrl: 'https://www.youtube.com/embed/Fw0W_6w_H-E', type: 'video' },
                    { id: 3, title: 'State and Lifecycle', videoUrl: 'https://www.youtube.com/embed/l59C99nN8nI', type: 'video' },
                    { id: 4, title: 'Quiz: Fundamentals', type: 'quiz' },
                ],
            },
            {
                id: 2,
                title: 'Web Development Basics',
                description: 'A comprehensive guide to HTML, CSS, and JavaScript for beginners.',
                instructor: 'John Smith',
                image: 'https://placehold.co/600x400/1e293b/fff?text=Web+Dev',
                lessons: [
                    { id: 1, title: 'HTML Essentials', videoUrl: 'https://www.youtube.com/embed/k9C6xWcO4K0', type: 'video' },
                    { id: 2, title: 'CSS Styling', videoUrl: 'https://www.youtube.com/embed/1Rs2ND1atBU', type: 'video' },
                    { id: 3, title: 'JavaScript Fundamentals', videoUrl: 'https://www.youtube.com/embed/W6NZfCO5sks', type: 'video' },
                    { id: 4, title: 'Quiz: Web Basics', type: 'quiz' },
                ],
            },
            {
                id: 3,
                title: 'Mastering C++',
                description: 'Dive deep into the fundamentals of C++, including syntax, data types, and object-oriented programming.',
                instructor: 'Michael Green',
                image: 'https://placehold.co/600x400/1e293b/fff?text=C%2B%2B',
                lessons: [
                    { id: 1, title: 'C++ Introduction', videoUrl: 'https://www.youtube.com/embed/vLnPwxZdW4Y', type: 'video' },
                    { id: 2, title: 'Variables and Data Types', videoUrl: 'https://www.youtube.com/embed/B_J2-48aB3Y', type: 'video' },
                    { id: 3, title: 'Control Flow and Functions', videoUrl: 'https://www.youtube.com/embed/18c3-4w_w0E', type: 'video' },
                    { id: 4, title: 'Quiz: C++ Fundamentals', type: 'quiz' },
                ],
            },
            {
                id: 4,
                title: 'Java Programming Essentials',
                description: 'Learn the core concepts of Java, from basic syntax to object-oriented principles.',
                instructor: 'Sarah Lee',
                image: 'https://placehold.co/600x400/1e293b/fff?text=Java',
                lessons: [
                    { id: 1, title: 'Getting Started with Java', videoUrl: 'https://www.youtube.com/embed/U3l0_2gL7aA', type: 'video' },
                    { id: 2, title: 'Variables and Operators', videoUrl: 'https://www.youtube.com/embed/r59xye3Vyv4', type: 'video' },
                    { id: 3, title: 'Classes and Objects', videoUrl: 'https://www.youtube.com/embed/hB2gK3-S9sU', type: 'video' },
                    { id: 4, title: 'Quiz: Java Basics', type: 'quiz' },
                ],
            },
            {
                id: 5,
                title: 'Python for Beginners',
                description: 'Master the versatile Python language, perfect for data science, web development, and more.',
                instructor: 'David Chen',
                image: 'https://placehold.co/600x400/1e293b/fff?text=Python',
                lessons: [
                    { id: 1, title: 'Hello, Python!', videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc', type: 'video' },
                    { id: 2, title: 'Data Structures in Python', videoUrl: 'https://www.youtube.com/embed/ijp-N__y20k', type: 'video' },
                    { id: 3, title: 'Functions and Modules', videoUrl: 'https://www.youtube.com/embed/9-yM8u7JtL8', type: 'video' },
                    { id: 4, title: 'Quiz: Python Fundamentals', type: 'quiz' },
                ],
            },
        ];

        const quizzesData = {
            1: {
                title: 'Fundamentals of React',
                questions: [
                    {
                        id: 1,
                        text: 'What is React?',
                        options: ['A framework', 'A library for building UIs', 'A database', 'An operating system'],
                        correctAnswer: 'A library for building UIs',
                    },
                    {
                        id: 2,
                        text: 'What is JSX?',
                        options: ['JavaScript XML', 'A database language', 'A styling language', 'A new programming language'],
                        correctAnswer: 'JavaScript XML',
                    },
                ],
            },
            2: {
                title: 'Web Development Basics',
                questions: [
                    {
                        id: 1,
                        text: 'Which tag is used for an ordered list in HTML?',
                        options: ['<ul>', '<ol>', '<li>', '<dl>'],
                        correctAnswer: '<ol>',
                    },
                    {
                        id: 2,
                        text: 'What does CSS stand for?',
                        options: ['Creative Style Sheets', 'Colorful Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets'],
                        correctAnswer: 'Cascading Style Sheets',
                    },
                ],
            },
            3: {
                title: 'C++ Fundamentals Quiz',
                questions: [
                    {
                        id: 1,
                        text: 'Which operator is used to access the address of a variable?',
                        options: ['*', '&', '#', '@'],
                        correctAnswer: '&',
                    },
                    {
                        id: 2,
                        text: 'What does "OOP" stand for?',
                        options: ['Open Office Protocol', 'Object-Oriented Programming', 'Original Operating Program', 'Output Operating Process'],
                        correctAnswer: 'Object-Oriented Programming',
                    },
                ],
            },
            4: {
                title: 'Java Basics Quiz',
                questions: [
                    {
                        id: 1,
                        text: 'Which keyword is used to declare a constant in Java?',
                        options: ['const', 'final', 'static', 'let'],
                        correctAnswer: 'final',
                    },
                    {
                        id: 2,
                        text: 'What is the entry point of a Java application?',
                        options: ['start()', 'main()', 'run()', 'entry()'],
                        correctAnswer: 'main()',
                    },
                ],
            },
            5: {
                title: 'Python Fundamentals Quiz',
                questions: [
                    {
                        id: 1,
                        text: 'Which of these data types is mutable?',
                        options: ['tuple', 'string', 'list', 'integer'],
                        correctAnswer: 'list',
                    },
                    {
                        id: 2,
                        text: 'How do you create a single-line comment in Python?',
                        options: ['// comment', '# comment', '<!-- comment -->', '/* comment */'],
                        correctAnswer: '# comment',
                    },
                ],
            },
        };

        // DOM elements
        const views = {
            home: document.getElementById('home-view'),
            dashboard: document.getElementById('dashboard-view'),
            course: document.getElementById('course-view'),
            quiz: document.getElementById('quiz-view'),
            certificate: document.getElementById('certificate-view'),
        };
        const loginModal = document.getElementById('login-modal');
        const authButton = document.getElementById('auth-button');
        const usernameDisplay = document.getElementById('username-display');
        const loginForm = document.getElementById('login-form');
        const usernameInput = document.getElementById('username-input');
        const loginError = document.getElementById('login-error');
        const dashboardUsername = document.getElementById('dashboard-username');
        const coursesGrid = document.getElementById('courses-grid');
        const enrolledCoursesList = document.getElementById('enrolled-courses-list');
        const courseTitle = document.getElementById('course-title');
        const videoPlayer = document.getElementById('video-player');
        const videoPlaceholder = document.getElementById('video-placeholder');
        const markCompleteButton = document.getElementById('mark-complete-button');
        const markCompleteContainer = document.getElementById('mark-complete-container');
        const lessonList = document.getElementById('lesson-list');
        const certificateContainer = document.getElementById('certificate-container');
        const generateCertificateButton = document.getElementById('generate-certificate-button');
        const quizTitle = document.getElementById('quiz-title');
        const questionCounter = document.getElementById('question-counter');
        const quizQuestionsContainer = document.getElementById('quiz-questions');
        const quizSubmitButton = document.getElementById('quiz-submit-button');
        const quizResults = document.getElementById('quiz-results');
        const quizScoreDisplay = document.getElementById('quiz-score-display');
        const certificateUsername = document.getElementById('certificate-username');
        const certificateCourseTitle = document.getElementById('certificate-course-title');
        const certificateDate = document.getElementById('certificate-date');

        // Global state variables
        let isLoggedIn = false;
        let user = null;
        let currentCourse = null;
        let currentLesson = null;
        let quizState = {
            currentQuiz: null,
            currentQuestionIndex: 0,
            answers: {},
        };

        // --- Functions for state management and UI rendering ---

        // Function to update the view
        const setView = (viewName) => {
            Object.keys(views).forEach(key => {
                views[key].style.display = key === viewName ? 'flex' : 'none';
                if (key === 'dashboard') {
                    // Special case for dashboard-view, which is a flex container
                    views[key].classList.toggle('hidden', key !== viewName);
                } else {
                    views[key].classList.toggle('hidden', key !== viewName);
                }
            });

            // Update header navigation
            const coursesNavItem = document.getElementById('courses-nav-item');
            const dashboardNavItem = document.getElementById('dashboard-nav-item');
            const userNavItem = document.getElementById('user-nav-item');
            
            coursesNavItem.classList.toggle('hidden', isLoggedIn);
            dashboardNavItem.classList.toggle('hidden', !isLoggedIn);
            userNavItem.classList.toggle('hidden', !isLoggedIn);
            
            if (isLoggedIn) {
                authButton.innerHTML = `<i data-lucide="log-out" class="w-4 h-4"></i><span>Log Out</span>`;
                authButton.classList.remove('bg-sky-600', 'hover:bg-sky-700');
                authButton.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
            } else {
                authButton.innerHTML = `<i data-lucide="log-in" class="w-4 h-4"></i><span>Log In</span>`;
                authButton.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
                authButton.classList.add('bg-sky-600', 'hover:bg-sky-700');
            }
            lucide.createIcons();
        };

        // Renders all course cards on the home page
        const renderCourses = () => {
            coursesGrid.innerHTML = '';
            coursesData.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.className = 'bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105';
                courseCard.innerHTML = `
                    <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover" />
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-2">${course.title}</h2>
                        <p class="text-gray-600 mb-4">${course.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm font-medium text-gray-500">Instructor: ${course.instructor}</span>
                            <button class="bg-sky-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-700 transition-colors enroll-btn" data-course-id="${course.id}">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                `;
                coursesGrid.appendChild(courseCard);
            });
            // Attach event listeners after rendering
            document.querySelectorAll('.enroll-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const courseId = parseInt(e.target.dataset.courseId);
                    const courseToEnroll = coursesData.find(c => c.id === courseId);
                    if (isLoggedIn) {
                        handleEnroll(courseToEnroll);
                    } else {
                        // If not logged in, prompt to log in first
                        showLoginModal();
                    }
                });
            });
        };

        // Renders the enrolled courses on the dashboard
        const renderDashboard = () => {
            enrolledCoursesList.innerHTML = '';
            if (user && user.enrolledCourses.length > 0) {
                user.enrolledCourses.forEach(course => {
                    const courseProgress = getCourseProgress(course.id);
                    const courseItem = document.createElement('div');
                    courseItem.className = 'bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center md:space-x-6';
                    courseItem.innerHTML = `
                        <img src="${course.image}" alt="${course.title}" class="w-full md:w-32 h-32 object-cover rounded-md mb-4 md:mb-0" />
                        <div class="flex-grow">
                            <h2 class="text-xl font-bold text-gray-800">${course.title}</h2>
                            <p class="text-sm text-gray-500">${course.instructor}</p>
                            <div class="mt-4 flex items-center space-x-2">
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-sky-500 h-2.5 rounded-full" style="width: ${courseProgress}%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-700">${courseProgress}% Complete</span>
                            </div>
                        </div>
                        <button class="mt-4 md:mt-0 bg-sky-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-sky-700 transition-colors continue-btn" data-course-id="${course.id}">
                            Continue Course
                        </button>
                    `;
                    enrolledCoursesList.appendChild(courseItem);
                });
                document.querySelectorAll('.continue-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const courseId = parseInt(e.target.dataset.courseId);
                        const courseToView = coursesData.find(c => c.id === courseId);
                        handleViewCourse(courseToView);
                    });
                });
            } else {
                enrolledCoursesList.innerHTML = `
                    <div class="text-center p-12 bg-gray-50 rounded-lg">
                        <p class="text-lg text-gray-500">You haven't enrolled in any courses yet.</p>
                        <button id="explore-courses-btn" class="mt-6 bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors">
                            Explore Courses
                        </button>
                    </div>
                `;
                document.getElementById('explore-courses-btn').addEventListener('click', () => setView('home'));
            }
        };

        // Renders the lessons for the current course
        const renderCourseContent = () => {
            lessonList.innerHTML = '';
            currentCourse.lessons.forEach(lesson => {
                const isCompleted = user.progress[currentCourse.id]?.completedLessons.includes(lesson.id);
                const isQuizCompleted = user.progress[currentCourse.id]?.quizCompleted;
                const lessonItem = document.createElement('li');
                lessonItem.className = 'group cursor-pointer';

                let icon = '';
                let clickAction = '';
                let completedIcon = '';

                if (lesson.type === 'video') {
                    icon = `<i data-lucide="video" class="text-sky-500 group-hover:text-sky-600 w-6 h-6"></i>`;
                    clickAction = `handleViewLesson(${lesson.id})`;
                    if (isCompleted) {
                        completedIcon = `<i data-lucide="check-circle" class="text-green-500 w-5 h-5"></i>`;
                    }
                } else if (lesson.type === 'quiz') {
                    icon = `<i data-lucide="play-circle" class="text-sky-500 group-hover:text-sky-600 w-6 h-6"></i>`;
                    clickAction = `handleViewQuiz()`;
                    if (isQuizCompleted) {
                        completedIcon = `<i data-lucide="check-circle" class="text-green-500 w-5 h-5"></i>`;
                    }
                }
                
                lessonItem.innerHTML = `
                    <div onclick="${clickAction}" class="flex items-center space-x-4 p-3 rounded-lg transition-colors group-hover:bg-gray-100">
                        ${icon}
                        <span class="flex-grow text-gray-800 font-medium">${lesson.title}</span>
                        ${completedIcon}
                    </div>
                `;
                lessonList.appendChild(lessonItem);
            });
            lucide.createIcons();

            // Show certificate button if all requirements are met
            const courseProgress = getCourseProgress(currentCourse.id);
            const isQuizCompleted = user.progress[currentCourse.id]?.quizCompleted;
            const allLessonsCompleted = user.progress[currentCourse.id]?.completedLessons.length === currentCourse.lessons.filter(l => l.type === 'video').length;

            if (allLessonsCompleted && isQuizCompleted) {
                certificateContainer.classList.remove('hidden');
                generateCertificateButton.textContent = user.progress[currentCourse.id]?.certificateGenerated ? 'View Certificate' : 'Generate Certificate';
            } else {
                certificateContainer.classList.add('hidden');
            }
        };

        // Renders the current quiz question
        const renderQuizQuestion = () => {
            const quiz = quizzesData[currentCourse.id];
            const currentQuestion = quiz.questions[quizState.currentQuestionIndex];

            quizTitle.textContent = quiz.title;
            questionCounter.textContent = `Question ${quizState.currentQuestionIndex + 1} of ${quiz.questions.length}`;
            
            quizQuestionsContainer.innerHTML = `
                <div class="mb-8">
                    <p class="text-xl font-medium text-gray-800 mb-4">${currentQuestion.text}</p>
                    <div class="space-y-4" id="options-container">
                        <!-- Options will be injected -->
                    </div>
                </div>
            `;
            const optionsContainer = document.getElementById('options-container');
            currentQuestion.options.forEach(option => {
                const optionBtn = document.createElement('button');
                optionBtn.className = `block w-full text-left p-4 rounded-lg border-2 transition-colors bg-gray-50 border-gray-200 hover:bg-gray-100`;
                optionBtn.textContent = option;
                optionBtn.addEventListener('click', () => {
                    // Visually select the option
                    document.querySelectorAll('#options-container button').forEach(btn => {
                        btn.classList.remove('bg-sky-100', 'border-sky-600', 'text-sky-800');
                        btn.classList.add('bg-gray-50', 'border-gray-200', 'hover:bg-gray-100');
                    });
                    optionBtn.classList.add('bg-sky-100', 'border-sky-600', 'text-sky-800');
                    quizState.answers[currentQuestion.id] = option;
                    quizSubmitButton.disabled = false;
                });
                optionsContainer.appendChild(optionBtn);
            });
            
            quizSubmitButton.disabled = !quizState.answers[currentQuestion.id];
            quizSubmitButton.textContent = quizState.currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Submit Quiz';
        };


        // --- User interaction handlers ---

        // Login
        const showLoginModal = () => {
            loginModal.style.display = 'flex';
        };

        const handleLogin = (username) => {
            isLoggedIn = true;
            user = {
                name: username,
                enrolledCourses: [],
                progress: {},
            };
            document.getElementById('username-display').textContent = username;
            loginModal.style.display = 'none';
            setView('dashboard');
            renderDashboard();
        };

        const handleLogout = () => {
            isLoggedIn = false;
            user = null;
            setView('home');
            renderCourses();
        };

        // Course enrollment
        const handleEnroll = (course) => {
            const isAlreadyEnrolled = user.enrolledCourses.find(c => c.id === course.id);
            if (isAlreadyEnrolled) return;
            user.enrolledCourses.push(course);
            user.progress[course.id] = {
                completedLessons: [],
                quizCompleted: false,
                quizScore: 0,
                certificateGenerated: false
            };
            renderDashboard();
        };

        // Course/Lesson view
        const handleViewCourse = (course) => {
            currentCourse = course;
            courseTitle.textContent = currentCourse.title;
            renderCourseContent();
            
            // Default to first lesson on view
            const firstLesson = currentCourse.lessons[0];
            if (firstLesson.type === 'video') {
                videoPlayer.src = firstLesson.videoUrl;
                videoPlayer.classList.remove('hidden');
                videoPlaceholder.classList.add('hidden');
                markCompleteContainer.classList.remove('hidden');
            } else {
                videoPlayer.classList.add('hidden');
                videoPlaceholder.classList.remove('hidden');
                markCompleteContainer.classList.add('hidden');
            }
            currentLesson = firstLesson;
            setView('course');
        };

        const handleViewLesson = (lessonId) => {
            currentLesson = currentCourse.lessons.find(l => l.id === lessonId);
            if (currentLesson.type === 'video') {
                videoPlayer.src = currentLesson.videoUrl;
                videoPlayer.classList.remove('hidden');
                videoPlaceholder.classList.add('hidden');
                markCompleteContainer.classList.remove('hidden');
            } else {
                videoPlayer.classList.add('hidden');
                videoPlaceholder.classList.remove('hidden');
                markCompleteContainer.classList.add('hidden');
            }
        };

        const handleMarkComplete = () => {
            if (!currentLesson || currentLesson.type !== 'video') return;
            const courseProgress = user.progress[currentCourse.id];
            if (!courseProgress.completedLessons.includes(currentLesson.id)) {
                courseProgress.completedLessons.push(currentLesson.id);
            }
            renderCourseContent();
        };

        // Quiz
        const handleViewQuiz = () => {
            quizState = {
                currentQuiz: quizzesData[currentCourse.id],
                currentQuestionIndex: 0,
                answers: {},
            };
            quizResults.style.display = 'none';
            quizQuestionsContainer.style.display = 'block';
            quizSubmitButton.style.display = 'block';
            renderQuizQuestion();
            setView('quiz');
        };

        const handleQuizSubmit = () => {
            const quiz = quizState.currentQuiz;
            if (quizState.currentQuestionIndex < quiz.questions.length - 1) {
                quizState.currentQuestionIndex++;
                renderQuizQuestion();
            } else {
                // Calculate score
                const correctCount = quiz.questions.filter(q => quizState.answers[q.id] === q.correctAnswer).length;
                const score = Math.round((correctCount / quiz.questions.length) * 100);
                
                // Update user progress
                user.progress[currentCourse.id].quizCompleted = true;
                user.progress[currentCourse.id].quizScore = score;
                
                // Show results and redirect
                quizQuestionsContainer.style.display = 'none';
                quizSubmitButton.style.display = 'none';
                quizResults.style.display = 'block';
                quizScoreDisplay.textContent = `${score}%`;
                
                setTimeout(() => {
                    setView('course');
                    renderCourseContent();
                }, 1500);
            }
        };

        // Certificate
        const handleGenerateCertificate = () => {
            user.progress[currentCourse.id].certificateGenerated = true;
            certificateUsername.textContent = user.name;
            certificateCourseTitle.textContent = currentCourse.title;
            certificateDate.textContent = `Date: ${new Date().toLocaleDateString()}`;
            setView('certificate');
        };


        // --- Utility functions ---

        const getCourseProgress = (courseId) => {
            if (!user || !user.progress[courseId]) return 0;
            const progress = user.progress[courseId];
            const totalLessons = coursesData.find(c => c.id === courseId).lessons.length;
            const completedCount = progress.completedLessons.length + (progress.quizCompleted ? 1 : 0);
            return Math.floor((completedCount / totalLessons) * 100);
        };

        // --- Event listeners and initial setup ---

        // General navigation links
        document.getElementById('home-link').addEventListener('click', () => {
            setView('home');
            renderCourses();
        });
        document.getElementById('courses-link').addEventListener('click', () => {
            setView('home');
            renderCourses();
        });
        document.getElementById('dashboard-link').addEventListener('click', () => {
            if (isLoggedIn) {
                setView('dashboard');
                renderDashboard();
            }
        });
        document.getElementById('back-to-dashboard').addEventListener('click', () => setView('dashboard'));
        document.getElementById('back-to-course-cert').addEventListener('click', () => setView('course'));

        // Auth button handler
        authButton.addEventListener('click', () => {
            if (isLoggedIn) {
                handleLogout();
            } else {
                showLoginModal();
            }
        });

        // Login form submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = usernameInput.value.trim();
            if (username === '') {
                loginError.classList.remove('hidden');
            } else {
                loginError.classList.add('hidden');
                handleLogin(username);
            }
        });

        // Course/Lesson handlers
        markCompleteButton.addEventListener('click', handleMarkComplete);
        generateCertificateButton.addEventListener('click', handleGenerateCertificate);

        // Quiz handler
        quizSubmitButton.addEventListener('click', handleQuizSubmit);

        // Initial render
        window.onload = () => {
            renderCourses();
            lucide.createIcons();
            setView('home');
        };

    