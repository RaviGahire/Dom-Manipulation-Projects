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

const container = document.querySelector('.container')
const backBtn = document.querySelector('.backbtn');
const nextBtn = document.querySelector('.nextbtn');
const random = document.querySelector('.random-btn');


reviewData.map((data)=>{
cards(data);
})





function cards(data) {
    const cards = document.createElement('div')
    cards.classList.add("reviews-card")
    cards.innerHTML=`
       <div class="card-header">
                <div class="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                        <path fill="white"
                            d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z" />
                    </svg>
                </div>

                <img src="${data.img}" alt="image">
            </div>
            <h2 class="name">${data.name}</h2>
            <h3 class="designation">${data.designation}</h3>
            <p class="discription">${data.comment}</p>

            <div class="card-footer">
                <div class="icons">
                    <svg class="backbtn" version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="25"
                        viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve">
                        <style>
                            .st0 {
                                display: none
                            }

                            .st1 {
                                display: inline
                            }

                            .st2 {
                                fill: #38bdf8
                            }
                        </style>
                        <g id="row2_1_">
                            <g id="_x32__4_">
                                <path class="st2"
                                    d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm22.4-63.7H57.6l12.3-15.2c0-2.2-1.8-3.9-3.9-3.9h-7.1L32 64l26.8 25.5H66c2.2 0 3.9-1.8 3.9-3.9L57.1 69.9h28.6c2.2 0 3.9-1.8 3.9-3.9v-4c0-2.1-1-4.4-3.2-4.4z"
                                    id="left_1_" />
                            </g>
                        </g>
                    </svg>
                    <svg class="nextbtn" version="1.1" id="icons_2_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="25"
                        viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve">
                        <style>
                            .st0 {
                                display: none
                            }

                            .st1 {
                                display: inline
                            }

                            .st2 {
                                fill: #38bdf8
                            }
                        </style>
                        <g id="row2_1_">
                            <g id="_x33__3_">
                                <path class="st2"
                                    d="M64 .3C28.8.3.3 28.8.3 64s28.5 63.7 63.7 63.7 63.7-28.5 63.7-63.7S99.2.3 64 .3zm0 121C32.3 121.3 6.7 95.7 6.7 64 6.7 32.3 32.3 6.7 64 6.7c31.7 0 57.3 25.7 57.3 57.3 0 31.7-25.6 57.3-57.3 57.3zm-2-82.8c-2.2 0-3.9 1.8-3.9 3.9l12.2 15.2H41.7c-2.2 0-3.2 2.2-3.2 4.4v4c0 2.2 1.8 3.9 3.9 3.9h28.4L58.1 85.6c0 2.2 1.8 3.9 3.9 3.9h7.1L95.8 64 69.1 38.5H62z"
                                    id="right_1_" />
                            </g>
                        </g>
                    </svg>
                </div>
                <button class="random-btn">Surprise Me</button>
            </div>   
    `

    console.log(data)
    container.append(cards)


}

