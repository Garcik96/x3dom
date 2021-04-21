import './styles.scss';
import {MDCTextField} from '@material/textfield';

const figura = (() => {
    let idFigura = 0;

    const btnInsertar = document.querySelector('#btnInsertar'),
          btnEditar = document.querySelector('#btnEditar');

    const radioButtonCubo = document.querySelector('#radioButtonCubo'),
          inputCuboLado = new MDCTextField(document.querySelector('#inputCuboLado'));

    const radioButtonEsfera = document.querySelector('#radioButtonEsfera'),
          inputEsferaRadio = new MDCTextField(document.querySelector('#inputEsferaRadio'));

    const radioButtonCono = document.querySelector('#radioButtonCono'),
          inputConoRadio = new MDCTextField(document.querySelector('#inputConoRadio')),
          inputConoAlto = new MDCTextField(document.querySelector('#inputConoAlto'));

    const radioButtonToro = document.querySelector('#radioButtonToro'),
          inputToroRadioInterior = new MDCTextField(document.querySelector('#inputToroRadioInterior')),
          inputToroRadioExterior = new MDCTextField(document.querySelector('#inputToroRadioExterior'));

    const inputColorInsertar = document.querySelector('#inputColorInsertar'),
          inputColorEditar = document.querySelector('#inputColorEditar');

    const inputPosicionX = new MDCTextField(document.querySelector('#inputPosicionX')),
          inputPosicionY = new MDCTextField(document.querySelector('#inputPosicionY')),
          inputPosicionZ = new MDCTextField(document.querySelector('#inputPosicionZ'));

    const inputTrasladarX = new MDCTextField(document.querySelector('#TrasladarX')),
          inputTrasladarY = new MDCTextField(document.querySelector('#TrasladarY')),
          inputTrasladarZ = new MDCTextField(document.querySelector('#TrasladarZ'));

    const inputEscalarX = new MDCTextField(document.querySelector('#EscalarX')),
          inputEscalarY = new MDCTextField(document.querySelector('#EscalarY')),
          inputEscalarZ = new MDCTextField(document.querySelector('#EscalarZ'));

    const x3dScene = document.querySelector('#x3dGroup');

    btnInsertar.addEventListener('click', () => {
        if(radioButtonCubo.checked) {
            crearCubo(inputCuboLado.value, inputColorInsertar.value, inputPosicionX.value, inputPosicionY.value, inputPosicionZ.value);
        } else if(radioButtonEsfera.checked) {
            crearEsfera(inputEsferaRadio.value, inputColorInsertar.value, inputPosicionX.value, inputPosicionY.value, inputPosicionZ.value);
        } else if(radioButtonCono.checked) {
            crearCono(inputConoRadio.value, inputConoAlto.value, inputColorInsertar.value, inputPosicionX.value, inputPosicionY.value, inputPosicionZ.value);
        } else if(radioButtonToro.checked) {
            crearToro(inputToroRadioInterior.value, inputToroRadioExterior.value, inputColorInsertar.value, inputPosicionX.value, inputPosicionY.value, inputPosicionZ.value);
        }
    })

    btnEditar.addEventListener('click', () => {
        editarFigura(inputColorEditar.value, inputTrasladarX.value, inputTrasladarY.value, inputTrasladarZ.value, inputEscalarX.value, inputEscalarY.value, inputEscalarZ.value);
    })

    const crearCubo = (lado = 0, color, posicionX, posicionY, posicionZ) => {
        x3dScene.insertAdjacentHTML('beforeend',`<transform translation=\'${posicionX} ${posicionY} ${posicionZ}\'><shape onclick=\'seleccionarFigura(event);\'><appearance><material diffuseColor=\'${color}\'></material></appearance><box size=\'${lado},${lado},${lado}\'></box></shape></transform>`);
    }

    const crearEsfera = (radio = 0, color, posicionX, posicionY, posicionZ) => {
        x3dScene.insertAdjacentHTML('beforeend',`<transform translation=\'${posicionX} ${posicionY} ${posicionZ}\'><shape onclick=\'seleccionarFigura(event);\'><appearance><material diffuseColor=\'${color}\'></material></appearance><sphere radius=\'${radio}\'></sphere></shape></transform>`);
    }

    const crearCono = (radio = 0, altura = 0, color, posicionX, posicionY, posicionZ) => {
        x3dScene.insertAdjacentHTML('beforeend',`<transform translation=\'${posicionX} ${posicionY} ${posicionZ}\'><shape onclick=\'seleccionarFigura(event);\'><appearance><material diffuseColor=\'${color}\'></material></appearance><cone bottomRadius=\'${radio}\' height=\'${altura}\'></cone></shape></transform>`);
    }

    const crearToro = (radioInterior = 0, radioExterior = 0, color, posicionX, posicionY, posicionZ) => {
        x3dScene.insertAdjacentHTML('beforeend',`<transform translation=\'${posicionX} ${posicionY} ${posicionZ}\'><shape onclick=\'seleccionarFigura(event);\'><appearance><material diffuseColor=\'${color}\'></material></appearance><torus innerRadius=\'${radioInterior}\' outerRadius=\'${radioExterior}\'></torus></shape></transform>`);
    }
})()