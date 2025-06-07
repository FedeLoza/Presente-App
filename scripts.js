// const dateNumber = document.getElementById("dateNumber")
// const dateText = document.getElementById("dateText")
// const dateMonth = document.getElementById("dateMonth")
// const dateYear = document.getElementById("dateYear")

// const setDate = () => {
//     const date = new Date();
//     dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
//     dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
//     dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
//     dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
// };

// const addNewAlumno = event => {
//     event.preventDefault();
//     const { value } = event.target.alumnoText;
//     if(!value) return;
//     const alumno = document.createElement('div');
//     alumno.classList.add('alumno');
//     alumno.addEventListener('click', changeAlumnoState);
//     alumno.textContent = value;
// };

// setDate();
