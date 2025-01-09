function addMoreSkills() {
    var skillsContainer = document.getElementById("skillsContainer");
    var skillField = document.createElement("div");
    skillField.classList.add("skillField");
    skillField.innerHTML = "\n        <input type=\"text\" class=\"skill\" placeholder=\"Skill Name (e.g., JavaScript)\" required>\n    ";
    skillsContainer.appendChild(skillField);
}
function addMoreLanguages() {
    console.log("hello world");
    var languagesContainer = document.getElementById("languagesContainer");
    var languagesField = document.createElement("div");
    languagesField.classList.add("languagesField");
    languagesField.innerHTML = "\n        <input type=\"text\" class=\"languages\" placeholder=\"Enter Languages (e.g., English)\" required>\n    ";
    languagesContainer.appendChild(languagesField);
}
var addSkillButton = document.getElementById("addSkill");
if (addSkillButton) {
    addSkillButton.addEventListener("click", addMoreSkills);
}
var addLanguagesButton = document.getElementById("addLanguages");
if (addLanguagesButton) {
    addLanguagesButton.addEventListener("click", addMoreLanguages);
}
function addMoreEducation() {
    var educationContainer = document.getElementById("educationContainer");
    var educationField = document.createElement("div");
    educationField.classList.add("educationField");
    educationField.innerHTML = "\n    <label for=\"degree\">Degree:</label>\n    <input type=\"text\" class=\"degree\" id=\"degree\" placeholder=\"Degree (e.g., B.Sc. Computer Science)\" required>\n\n    <label for=\"institution\">Institution:</label>\n    <input type=\"text\" class=\"institution\" id=\"institution\" placeholder=\"Institution (e.g., XYZ University)\" required>\n\n    <label for=\"gradeYear\">Graduation Year:</label>\n    <input type=\"number\" class=\"gradeYear\" id=\"gradeYear\" placeholder=\"Graduation Year (e.g., 2022 or 2022-2023)\" pattern=\"^d{4}(-d{4})?$\" title=\"Enter year in format: 2022 or 2022-2023\" required>\n";
    educationContainer.appendChild(educationField);
}
function addMoreExperience() {
    var experienceContainer = document.getElementById("experienceContainer");
    var experienceField = document.createElement("div");
    experienceField.classList.add("experienceField");
    experienceField.innerHTML = "\n    <label for=\"company\">Company Name:</label>\n    <input type=\"text\" class=\"company\" id=\"company\" placeholder=\"Company Name (e.g., ABC Corp)\" required>\n\n    <label for=\"role\">Role/Position:</label>\n    <input type=\"text\" class=\"role\" id=\"role\" placeholder=\"Role/Position (e.g., Software Developer)\" required>\n\n    <label for=\"experienceYears\">Years Worked:</label>\n    <input type=\"number\" class=\"experienceYears\" id=\"experienceYears\" placeholder=\"Years Worked (e.g., 2022 or 2022-2023)\" pattern=\"^d{4}(-d{4})?$\" title=\"Enter year in format: 2022 or 2022-2023\" required>\n\n    <label for=\"experienceDes\">Experience Description:</label>\n    <textarea id=\"experienceDes\" placeholder=\"Summarize your experience at [Company Name] and describe your role.\" rows=\"4\" required class=\"experienceDes\"></textarea>\n";
    experienceContainer.appendChild(experienceField);
}
var addExperienceButton = document.getElementById("addExperience");
addExperienceButton === null || addExperienceButton === void 0 ? void 0 : addExperienceButton.addEventListener("click", addMoreExperience);
function collectSkills() {
    var skillFields = document.querySelectorAll("#skillsContainer .skillField");
    return Array.from(skillFields).map(function (field) {
        var _a;
        var skillName = ((_a = field.querySelector(".skill")) === null || _a === void 0 ? void 0 : _a.value) || 'Not provided';
        return { skillName: skillName };
    });
}
function updateSkillsDisplay() {
    var skillsContainer = document.getElementById("skillsContainer");
    var skills = collectSkills();
    skillsContainer.innerHTML = skills.map(function (skill) { return "\n         <div id=\"skillsContainer\">\n            <div class=\"skillField name\">\n            <input type=\"text\" class=\"skill\"  value=\"".concat(skill.skillName, "\" placeholder=\"Skill Name (e.g., JavaScript)\" id=\"skills\">\n        </div>\n    "); }).join('');
}
function collectLanguages() {
    var languagesFields = document.querySelectorAll("#languagesContainer .languagesField");
    return Array.from(languagesFields).map(function (field) {
        var _a;
        var languagesName = ((_a = field.querySelector(".languages")) === null || _a === void 0 ? void 0 : _a.value) || 'Not provided';
        return { languagesName: languagesName };
    });
}
function updateLanguagesDisplay() {
    var languagesContainer = document.getElementById("languagesContainer");
    var languages = collectLanguages();
    languagesContainer.innerHTML = languages.map(function (languages) { return "\n         <div id=\"languagesContainer\">\n            <div class=\"languagesField name\">\n            <input type=\"text\" class=\"languages\"  value=\"".concat(languages.languagesName, "\" placeholder=\"Enter Languages (e.g., English)\" id=\"languages\">\n        </div>\n    "); }).join('');
}
function updateExperienceDisplay() {
    var experienceContainer = document.getElementById("experienceContainer");
    var experiences = collectExperience();
    experienceContainer.innerHTML = experiences.map(function (exp) { return "\n\n    <div class=\"experienceField\">\n    <label for=\"company\">Company Name:</label>\n    <input type=\"text\" id=\"company\" class=\"company\" value=\"".concat(exp.company, "\" placeholder=\"Company Name (e.g., ABC Corp)\" required>\n\n    <label for=\"role\">Role/Position:</label>\n    <input type=\"text\" id=\"role\" class=\"role\" value=\"").concat(exp.role, "\" placeholder=\"Role/Position (e.g., Software Developer)\" required>\n\n    <label for=\"experienceYears\">Years Worked:</label>\n    <input type=\"number\" id=\"experienceYears\" class=\"experienceYears\" value=\"").concat(exp.experienceYears, "\" placeholder=\"Years Worked (e.g., 2019-2022)\" required>\n\n    <label for=\"experienceDes\">Experience Description:</label>\n    <textarea id=\"experienceDes\" placeholder=\"Summarize your experience at [Company Name] and describe your role.\" rows=\"4\" required class=\"experienceDes\">").concat(exp.experienceDes, "</textarea>\n</div>\n\n\n\n    "); }).join('');
}
function collectExperience() {
    var experienceFields = document.querySelectorAll("#experienceContainer .experienceField");
    return Array.from(experienceFields).map(function (field) {
        var _a, _b, _c, _d;
        var company = ((_a = field.querySelector(".company")) === null || _a === void 0 ? void 0 : _a.value) || 'Not provided';
        var role = ((_b = field.querySelector(".role")) === null || _b === void 0 ? void 0 : _b.value) || 'Not provided';
        var experienceYears = ((_c = field.querySelector(".experienceYears")) === null || _c === void 0 ? void 0 : _c.value) || 'Not provided';
        var experienceDes = ((_d = field.querySelector(".experienceDes")) === null || _d === void 0 ? void 0 : _d.value) || 'Not provided';
        return { company: company, role: role, experienceYears: experienceYears, experienceDes: experienceDes };
    });
}
function updateEducationDisplay() {
    var education = collectEducation();
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = '';
    education.forEach(function (item) {
        var div = document.createElement("div");
        div.classList.add("educationField");
        div.innerHTML = "\n            <span class=\"degreeStyle\">".concat(item.degree, "</span><br>\n            <span class=\"instituteStyle\">").concat(item.institution, "</span><br>\n            <span class=\"instituteStyle\">(").concat(item.gradeYear, ")</span>\n            <div class=\"line\"></div> <!-- Optional line separator -->\n        ");
        resumeOutput.appendChild(div);
    });
}
function collectEducation() {
    var educationFields = document.querySelectorAll("#educationContainer .educationField");
    return Array.from(educationFields).map(function (field) {
        var degreeInput = field.querySelector(".degree");
        var institutionInput = field.querySelector(".institution");
        var gradeYearInput = field.querySelector(".gradeYear");
        var degree = degreeInput ? degreeInput.value : 'Not provided';
        var institution = institutionInput ? institutionInput.value : 'Not provided';
        var gradeYear = gradeYearInput ? gradeYearInput.value : 'Not provided';
        return { degree: degree, institution: institution, gradeYear: gradeYear };
    });
}
function collectContactDetails() {
    return {
        email: document.getElementById("contactEmail").value,
        phone: document.getElementById("contactPhone").value,
        address: document.getElementById("address").value,
        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,
        website: document.getElementById("website").value
    };
}
var addEduButton = document.getElementById("addMoreEducation");
addEduButton === null || addEduButton === void 0 ? void 0 : addEduButton.addEventListener("click", function () {
    addMoreEducation();
    updateEducationDisplay();
});
function handleFileInputChange(event) {
    var _a;
    var fileInput = event.target;
    var file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            var imageUrl = reader_1.result;
            var imgPreview = document.getElementById("profileImagePreview");
            imgPreview.src = imageUrl;
        };
        reader_1.readAsDataURL(file);
    }
}
var profileImageInput = document.getElementById("profileImage");
profileImageInput === null || profileImageInput === void 0 ? void 0 : profileImageInput.addEventListener("change", handleFileInputChange);
function generatedResume(event) {
    event.preventDefault();
    var profileImage = document.getElementById("profileImagePreview").src;
    var name = document.getElementById("name").value;
    var subheading = document.getElementById("subheading").value;
    var profileSummary = document.getElementById("profileSummary").value;
    var skills = collectSkills();
    var languages = collectLanguages();
    var education = collectEducation();
    var experience = collectExperience();
    var contact = collectContactDetails();
    var mainHeading = document.getElementById("resume");
    var resumeOutput = document.getElementById("resumeOutput");
    if (mainHeading && resumeOutput) {
        mainHeading.innerHTML = "Your Resume";
        resumeOutput.innerHTML = "\n        <div class=\"container\">\n          <div class=\"left\">\n            <div>\n              ".concat(profileImage ? "<div class=\"resume\"><img src=\"".concat(profileImage, "\" alt=\"Profile Image\" style=\"max-width: 200px; height: auto; border-radius: 50%; margin-bottom: 20px;\" class=\"img\"></div>") : '', "\n            </div>\n            \n            <div>\n              <h3 class=\"setWidth\">Summary</h3>\n              <p class=\"sizeChange\">").concat(profileSummary, "</p>\n            </div>\n    \n            <div>\n              <h3 class=\"setWidth\">Contact Information</h3>\n              <p class=\"sizeChange\"><strong><i class=\"fas fa-envelope\"></i> Email:</strong> ").concat(contact.email, "</p>\n              <p class=\"sizeChange\"><strong><i class=\"fas fa-phone\"></i> Phone Number:</strong> ").concat(contact.phone, "</p>\n              <p class=\"sizeChange\"><strong><i class=\"fas fa-regular fa-address-card\"></i> Address:</strong> ").concat(contact.address, "</p>\n              <p class=\"sizeChange\"><strong><i class=\"fab fa-linkedin\"></i> LinkedIn:</strong> <a href=\"").concat(contact.linkedin, "\" target=\"_blank\">").concat(contact.linkedin, "</a></p>\n              <p class=\"sizeChange\"><strong><i class=\"fab fa-github\"></i> GitHub:</strong> <a href=\"").concat(contact.github, "\" target=\"_blank\">").concat(contact.github, "</a></p>\n              <p class=\"sizeChange\"><strong><i class=\"fas fa-globe\"></i> Website:</strong> <a href=\"").concat(contact.website, "\" target=\"_blank\">").concat(contact.website, "</a></p>\n            </div>\n    \n            <div>\n              <h3 class=\"setWidth\">Skills</h3>\n              <p class=\"setDiv\">\n                ").concat(skills.map(function (skill) { return "\n                  <div class=\"skill-item\">\n                    <span class=\"circle\"></span>\n                    ".concat(skill.skillName, "\n                  </div>\n                "); }).join(''), "\n              </p>\n            </div>\n    \n            <div>\n              <h3 class=\"setWidth\">Certificates</h3>\n              <p class=\"setDiv\">\n                ").concat(languages.map(function (language) { return "\n                  <div class=\"skill-item\">\n                    <span class=\"circle\"></span>\n                    ".concat(language.languagesName, "\n                  </div>\n                "); }).join(''), "\n              </p>\n            </div>\n          </div>\n    \n          <div class=\"right\">\n            <div class=\"bgColor\">\n              <h3 class=\"nameHeading\">").concat(name, "</h3>\n              <div class=\"styleline\"></div>\n              <h5 class=\"sub\">").concat(subheading, "</h5>\n            </div>\n            \n            <div class=\"paddingSet\">\n              <div>\n                <h3 class=\"nameHeadingStyle\">Education</h3>\n                <div class=\"styleline\"></div>\n                <div class=\"educationSection\">\n                  ").concat(education.map(function (item) { return "\n                    <div class=\"educationField\">\n                      <span class=\"diamond\"></span>\n                      <span class=\"degreeStyle\">".concat(item.degree, "</span><br>\n                      <span class=\"instituteStyle\">").concat(item.institution, "</span><br>\n                      <span class=\"instituteStyle\">").concat(item.gradeYear, "</span>\n                    </div>\n                  "); }).join(''), "\n                </div>\n              </div>\n    \n              <div>\n                <h3 class=\"nameHeadingStyle\">Work Experience</h3>\n                <div class=\"styleline\"></div>\n                <div class=\"educationSection\">\n                  ").concat(experience.map(function (exp) { return "\n                    <div class=\"educationField\">\n                      <span class=\"diamond\"></span>\n                      <span class=\"degreeStyle\">".concat(exp.company, "</span><br>\n                      <span class=\"instituteStyle\">").concat(exp.role, "</span><br>\n                      <span class=\"instituteStyle\">").concat(exp.experienceYears, "</span><br>\n                      <span class=\"instituteStyle\">").concat(exp.experienceDes, "</span>\n                    </div>\n                  "); }).join(''), "\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n    \n      ");
    }
    document.getElementById("resumeForm").style.display = 'none';
    resumeOutput.style.display = 'block';
    var generateButton = document.querySelector("button[type='submit']");
    if (generateButton) {
        generateButton.textContent = 'Save Resume';
    }
}
var resumeForm = document.getElementById("resumeForm");
resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener("submit", generatedResume);
