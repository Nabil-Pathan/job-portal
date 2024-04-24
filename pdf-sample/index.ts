interface ResumeData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  skills: string;
  exp1_org: string;
  exp1_pos: string;
  exp1_desc: string;
  exp1_dur: string;
  exp2_org: string;
  exp2_pos: string;
  exp2_desc: string;
  exp2_dur: string;
  proj1_title: string;
  proj1_link: string;
  proj1_desc: string;
  proj2_title: string;
  proj2_link: string;
  proj2_desc: string;
  edu1_school: string;
  edu1_year: string;
  edu1_qualification: string;
  edu1_desc: string;
  edu2_school: string;
  edu2_year: string;
  edu2_qualification: string;
  edu2_desc: string;
  extra_1: string;
  extra_2: string;
}

const generateResume = ({
  name,
  email,
  phone,
  linkedin,
  github,
  skills,
  exp1_org,
  exp1_pos,
  exp1_desc,
  exp1_dur,
  exp2_org,
  exp2_pos,
  exp2_desc,
  exp2_dur,
  proj1_title,
  proj1_link,
  proj1_desc,
  proj2_title,
  proj2_link,
  proj2_desc,
  edu1_school,
  edu1_year,
  edu1_qualification,
  edu1_desc,
  edu2_school,
  edu2_year,
  edu2_qualification,
  edu2_desc,
  extra_1,
  extra_2,
}: ResumeData): string => {
  return `
      <!doctype html>
      <html>
          <head>
              <!-- Font Awesome -->
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
              <!-- Tailwind CSS -->
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          </head>
          <body class="font-sans antialiased">

            <div class="container mx-auto p-4">
              <div class="text-center">
                <h1 class="text-4xl font-bold">${name}</h1>
                <p class="text-gray-600 text-2xl mt-3">${email} | (+92) ${phone}</p>
                <p class="text-gray-600 mt-3"><a href="${linkedin}" class="text-blue-500">${linkedin}</a> | <a href="${github}" class="text-blue-500">${github}</a></p>
              </div>
              
              <hr class="my-4">
              
             
              
              <div class="mt-4">
                <h2 class="text-xl font-bold my-4">Experience</h2>
                <div class="mb-4">
                  <h3 class="text-lg font-bold text-2xl">${exp1_org} as ${exp1_pos}</h3>
                  <p class="text-gray-700 text-xl">${exp1_dur}</p>
                  <p>${exp1_desc}</p>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-2xl ">${exp2_org} as ${exp2_pos}</h3>
                  <p class="text-gray-700 text-xl">${exp2_dur}</p>
                  <p>${exp2_desc}</p>
                </div>
              </div>


              <div>
              <h2 class="text-3xl font-bold mb-2">Skills</h2>
              <p class="text-gray-700 text-xl font-medium">${skills}</p>
            </div>
              
              <div>
                <h2 class="text-3xl font-bold my-4">Projects</h2>
                <div class="mt-4">
                  <h3 class="text-lg font-bold"><a href="${proj1_link}" class="text-blue-500 underline">${proj1_title}</a></h3>
                  <p>${proj1_desc}</p>
                </div>
                <div>
                  <h3 class="text-lg font-bold"><a href="${proj2_link}" class="text-blue-500 underline">${proj2_title}</a></h3>
                  <p>${proj2_desc}</p>
                </div>
              </div>
              
              <div class="mt-4">
                <h2 class="text-3xl font-bold my-4">Education</h2>
                <div class="mt-4">
                  <h3 class="text-lg font-bold">${edu1_school}, ${edu1_qualification}</h3>
                  <p class="text-gray-700">${edu1_year}</p>
                  <p>${edu1_desc}</p>
                </div>
                <div>
                  <h3 class="text-lg font-bold">${edu2_school}, ${edu2_qualification}</h3>
                  <p class="text-gray-700">${edu2_year}</p>
                  <p>${edu2_desc}</p>
                </div>
              </div>
              
              <div class="mt-4">
                <h2 class="text-3xl font-bold my-4">Extra-Curriculars/Activities</h2>
                <ul class="mt-4">
                  <li class="mb-2 text-xl"><span class="font-bold text-xl">Languages:</span> ${extra_1}</li>
                  <li class="text-xl"><span class="font-bold text-xl">Hobbies:</span> ${extra_2}</li>
                </ul>
              </div>
              
            </div>

          </body>
      </html> 
    `;
};

export default generateResume