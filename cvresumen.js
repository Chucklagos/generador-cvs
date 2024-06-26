document.addEventListener("DOMContentLoaded", () => {
  initializeSortable();
});

function DatosPersonales() {
  // Obtener los valores de los campos de entrada
  const name = document.getElementById("name").value;
  const headline = document.getElementById("headline").value;
  const email = document.getElementById("email").value;
  const resumenperfil = document.getElementById("resumenperfil").value;

  // Actualizar los elementos de la vista previa
  document.getElementById("output-name").innerText = name;
  document.getElementById("output-headline").innerText = headline;
  document.getElementById("output-email").innerText = email;
  document.getElementById("output-resumenperfil").innerText = resumenperfil;
}

function addEducacion() {
  const newAccordionId =
    "collapse" + (document.querySelectorAll(".accordion-item").length + 1);

  const newAccordion = `
    <div class="accordion-item list-item">
        <h2 class="accordion-header ">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#${newAccordionId}" aria-expanded="true" aria-controls="${newAccordionId}">
                <i class="handle bi bi-arrows-move"></i>
                <input type="text" class="form-control" id="nombrecurso-${newAccordionId}" aria-describedby="textcurso" placeholder="Nombre de curso" oninput="DatosEducacion('${newAccordionId}')">
            </button>
        </h2>
        <div id="${newAccordionId}" class="accordion-collapse collapse" data-bs-parent="#accordionsub">
            <div class="accordion-body">
                <form class="educacion shadow p-3 mb-5 bg-body-tertiary rounded id="form-item-"${newAccordionId}">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="label-institucion-${newAccordionId}" class="form-label">Institución</label>
                            <input type="text" class="form-control" id="institucion-${newAccordionId}" name="institucion-${newAccordionId}" oninput="DatosEducacion('${newAccordionId}')">
                        </div>
                        <div class="col-md-6">
                            <label for="ciudad-${newAccordionId}" class="form-label">Ciudad</label>
                            <input type="text" class="form-control" id="ciudad-${newAccordionId}" name="ciudad-${newAccordionId}" oninput="DatosEducacion('${newAccordionId}')">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label for="startDate" class="form-label">Fecha de Inicio</label>
                            <div class="row">
                                <div class="col-6">
                                    <select class="form-select" id="startMonth-${newAccordionId}" name="startMonth-${newAccordionId}" onchange="DatosEducacion('${newAccordionId}')">
                                        <option selected>Mes</option>
                                        <option value="Enero">Enero</option>
                                        <option value="Febrero">Febrero</option>
                                        <option value="Marzo">Marzo</option>
                                        <!-- Más opciones de meses -->
                                    </select>
                                </div>
                                <div class="col-6">
                                    <select class="form-select" id="startYear-${newAccordionId}" name="startYear-${newAccordionId}" onchange="DatosEducacion('${newAccordionId}')">
                                        <option selected>Año</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <!-- Más opciones de años -->
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="endDate" class="form-label">Fecha de finalización</label>
                            <div class="row">
                                <div class="col-6">
                                    <select class="form-select" id="endMonth-${newAccordionId}" name="endMonth-${newAccordionId}" onchange="DatosEducacion('${newAccordionId}')">
                                        <option selected>Mes</option>
                                        <option value="Enero">Enero</option>
                                        <option value="Febrero">Febrero</option>
                                        <option value="Marzo">Marzo</option>
                                        <!-- Más opciones de meses -->
                                    </select>
                                </div>
                                <div class="col-6">
                                    <select class="form-select" id="endYear-${newAccordionId}" name="endYear-${newAccordionId}" onchange="DatosEducacion('${newAccordionId}')">
                                        <option selected>Año</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <!-- Más opciones de años -->
                                    </select>
                                </div>
                            </div>
                            <div class="form-check mt-2">
                                <input class="form-check-input" type="checkbox" value="" id="present-${newAccordionId}" name="present-${newAccordionId}" onchange="DatosEducacion('${newAccordionId}')">
                                <label class="form-check-label" for="present-${newAccordionId}">
                                    Presente
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="description-${newAccordionId}" class="form-label">Descripción</label>
                        <textarea class="form-control" id="description-${newAccordionId}" name="description-${newAccordionId}" rows="4" oninput="DatosEducacion('${newAccordionId}')"></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
`;
  document
    .getElementById("accordionsub")
    .insertAdjacentHTML("beforeend", newAccordion);

  // Crear la previsualización correspondiente
  const previewDiv = document.createElement("div");
  previewDiv.classList.add("preview");
  previewDiv.id = `preview-${newAccordionId}`;
  previewDiv.innerHTML = `<hr>
   <div class="preview-item" id="preview-${newAccordionId}">
    <p><strong>Nombre:</strong> <span id="preview-nombrecurso-${newAccordionId}"></span></p>
    <p><strong>Institución:</strong> <span id="preview-institucion-${newAccordionId}"></span></p>
    <p><strong>Ciudad:</strong> <span id="preview-ciudad-${newAccordionId}"></span></p>
    <p><strong>Fecha:</strong> <span id="preview-date-${newAccordionId}"></span></p>
    <p><strong>Descripción:</strong> <span id="preview-description-${newAccordionId}"></span></p>

   </div>    `;
  document.getElementById("previews-educacion").appendChild(previewDiv);
}

function DatosEducacion(accordionId) {
  const nameInput = document.getElementById(`nombrecurso-${accordionId}`);
  const institutionInput = document.getElementById(
    `institucion-${accordionId}`
  );
  const cityInput = document.getElementById(`ciudad-${accordionId}`);
  const descriptionInput = document.getElementById(
    `description-${accordionId}`
  );
  const startMonthSelect = document.getElementById(`startMonth-${accordionId}`);
  const startYearSelect = document.getElementById(`startYear-${accordionId}`);
  const endMonthSelect = document.getElementById(`endMonth-${accordionId}`);
  const endYearSelect = document.getElementById(`endYear-${accordionId}`);
  const presentCheckbox = document.getElementById(`present-${accordionId}`);

  const namePreview = document.getElementById(
    `preview-nombrecurso-${accordionId}`
  );
  const institutionPreview = document.getElementById(
    `preview-institucion-${accordionId}`
  );
  const cityPreview = document.getElementById(`preview-ciudad-${accordionId}`);
  const descriptionPreview = document.getElementById(
    `preview-description-${accordionId}`
  );
  const datePreview = document.getElementById(`preview-date-${accordionId}`);

  namePreview.textContent = nameInput.value;
  institutionPreview.textContent = institutionInput.value;
  cityPreview.textContent = cityInput.value;
  descriptionPreview.textContent = descriptionInput.value;

  const startDate = `${startMonthSelect.value}-${startYearSelect.value}`;
  const endDate = presentCheckbox.checked
    ? "Presente"
    : `${endMonthSelect.value}/${endYearSelect.value}`;

  datePreview.textContent = `Desde ${startDate} hasta ${endDate}`;
}

/** Moviliza cada Item */

function initializeSortable() {
  const accordions = document.querySelectorAll(".sortable-list");
  accordions.forEach((accordion) => {
    new Sortable(accordion, {
      handle: ".handle",
      animation: 150,
    });
  });
}
