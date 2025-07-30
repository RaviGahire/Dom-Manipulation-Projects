const reviewData = [
    {
        img: 'https://ravi-gahire.netlify.app/Images/last-image.jpg',
        name: 'Ravi',
        designation: 'Frontend Developer',
        comment: 'Ravi consistently brings creativity and precision to his work. His attention to detail and passion for clean, responsive design make him a valuable team member.'
    },
    {
        img: 'https://www.shutterstock.com/image-photo/close-up-photo-young-indian-girl-home-sitting-2640330269',
        name: 'Sneha',
        designation: 'UI/UX Designer',
        comment: 'Sneha’s designs always prioritize user experience. Her wireframes and prototypes are not only functional but also aesthetically pleasing and highly intuitive to interact with.'
    },
    {
        img: 'https://media.istockphoto.com/id/1205739566/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-happy-face-smiling.jpg?s=2048x2048&w=is&k=20&c=P4Y18NjEoY1AMoXgApHFDj-QFpnjfwgVHZ529xLfocc=',
        name: 'Amit',
        designation: 'Backend Developer',
        comment: 'Amit is a backend expert who writes scalable, secure code. He understands system architecture well and always contributes smart solutions for complex server-side challenges.'
    },
    {
        img: 'https://images.unsplash.com/photo-1509839862600-309617c3201e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww',
        name: 'Priya',
        designation: 'Full Stack Developer',
        comment: 'Priya bridges the gap between frontend and backend perfectly. Her ability to work across the stack makes her an essential asset to any development project.'
    },
    {
        img: 'https://media.istockphoto.com/id/1333350309/photo/smiling-bearded-indian-businessman-stands-near-desk-and-looks-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=lJ8J3waT8liDtC1i4FEPZpCqnq3ABDc0pAsrl8HeoZQ=',
        name: 'Rahul',
        designation: 'DevOps Engineer',
        comment: 'Rahul ensures reliable deployment pipelines and smooth CI/CD processes. His scripting knowledge and quick problem-solving improve the development workflow significantly across the team.'
    },
    {
        img: 'https://media.istockphoto.com/id/1987655119/photo/smiling-young-businesswoman-standing-in-the-corridor-of-an-office.jpg?s=2048x2048&w=is&k=20&c=TZuOS25rlnHWb7X3hbbYbtsYVmVNvRRRgRhgMM3BBRw=',
        name: 'Neha',
        designation: 'QA Tester',
        comment: 'Neha is meticulous in her testing approach. She catches edge cases others miss, ensuring that all features meet quality standards before release.'
    },
    {
        img: 'https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=2048x2048&w=is&k=20&c=mRIR2J-BH4YraFUF4pN_rFQ3ZdSF6oqwV2vD5p-vB0I=',
        name: 'Suresh',
        designation: 'Project Manager',
        comment: 'Suresh manages projects with clarity and focus. His leadership style keeps the team motivated and ensures that deadlines are always met with high standards.'
    },
    {
        img: 'https://media.istockphoto.com/id/1253442544/photo/beautiful-hispanic-woman.jpg?s=2048x2048&w=is&k=20&c=EvNaFjt0Iai6spxLUePPytSjaL65NuMCM58ZpNDEbwM=',
        name: 'Anjali',
        designation: 'Content Writer',
        comment: 'Anjali writes clear, engaging content tailored to the audience. Her words enhance the brand voice and help users connect with the product naturally.'
    },
    {
        img: 'https://media.istockphoto.com/id/506869172/photo/committed-to-success.jpg?s=2048x2048&w=is&k=20&c=gnicsVLWJV4Am_fg_iWC0vFqhsg5-bvAsf3niItzNfA=',
        name: 'Karan',
        designation: 'Graphic Designer',
        comment: 'Karan’s visual creativity elevates every project. His design choices are always aligned with brand identity and help communicate ideas effectively through strong visuals.'
    },
    {
        img: 'https://media.istockphoto.com/id/1307452221/photo/confident-businesswoman-looking-at-camera-in-modern-office.jpg?s=2048x2048&w=is&k=20&c=jb9Vb752ypIDw45xrK1x6nu-QTDFeiKSeC86AHlOUfU=',
        name: 'Divya',
        designation: 'Product Owner',
        comment: 'Divya has a strong vision and guides product development with purpose. Her ability to define priorities and align teams ensures consistent and meaningful progress.'
    }
];




const img = document.querySelector('.person-img')
const [user_name, user_designation, user_discription] = document.querySelectorAll('.name, .designation, .discription');

const backBtn = document.querySelector('.backbtn');
const nextBtn = document.querySelector('.nextbtn');
const randomBtn = document.querySelector('.random-btn');


let currentItem = 0;




document.addEventListener('DOMContentLoaded', (e) => {
    showData(currentItem)

})

function showData(user) {
    const data = reviewData[user]
    img.src = data.img
    user_name.textContent = data.name
    user_designation.textContent = data.designation
    user_discription.textContent = data.comment
}

nextBtn.addEventListener('click', () => {
    currentItem++
    if (currentItem > reviewData.length - 1) {
        currentItem = 0
    }
    showData(currentItem)

})

backBtn.addEventListener('click', () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviewData.length - 1;
    }
    showData(currentItem)

})


randomBtn.addEventListener('click', () => {
   currentItem = Math.floor(Math.random() * reviewData.length )
    showData(currentItem)

})

