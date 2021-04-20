import './styles.scss';
import {MDCTextField} from '@material/textfield';

(() => {
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

    const inputTrasladarX = new MDCTextField(document.querySelector('#inputTrasladarX')),
          inputTrasladarY = new MDCTextField(document.querySelector('#inputTrasladarY')),
          inputTrasladarZ = new MDCTextField(document.querySelector('#inputTrasladarZ'));

    const inputEscalarX = new MDCTextField(document.querySelector('#inputEscalarX')),
          inputEscalarY = new MDCTextField(document.querySelector('#inputEscalarY')),
          inputEscalarZ = new MDCTextField(document.querySelector('#inputEscalarZ'));

    const x3dScene = document.querySelector('#x3dScene');

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
        const rojo = parseInt('0x' + color.slice(1,3)) / 255;
        const verde = parseInt('0x' + color.slice(3,5)) / 255;
        const azul = parseInt('0x' + color.slice(5,7)) / 255;
        x3dScene.insertAdjacentHTML('beforeend',`<transform translation=\'${posicionX} ${posicionY} ${posicionZ}\'><shape><appearance><material diffuseColor=\'${rojo} ${verde} ${azul}\'></material></appearance><box size=\'${lado},${lado},${lado}\'></box></shape></transform>`);
    }

    const crearEsfera = (radio = 0, color, posicionX, posicionY, posicionZ) => {
        const rojo = parseInt('0x' + color.slice(1,3)) / 255;
        const verde = parseInt('0x' + color.slice(3,5)) / 255;
        const azul = parseInt('0x' + color.slice(5,7)) / 255;
        console.log(radio);
        x3dScene.insertAdjacentHTML('beforeend',`<transform translation=\'${posicionX} ${posicionY} ${posicionZ}\'><shape><appearance><material diffuseColor=\'${rojo} ${verde} ${azul}\'></material></appearance><sphere radius=\'${radio}\'></sphere></shape></transform>`);
    }

    const crearCono = (radio = 0, altura = 0, color, posicionX, posicionY, posicionZ) => {
        const rojo = parseInt('0x' + color.slice(1,3)) / 255;
        const verde = parseInt('0x' + color.slice(3,5)) / 255;
        const azul = parseInt('0x' + color.slice(5,7)) / 255;
        x3dScene.insertAdjacentHTML('beforeend',`<transform translation=\'${posicionX} ${posicionY} ${posicionZ}\'><shape><appearance><material diffuseColor=\'${rojo} ${verde} ${azul}\'></material></appearance><cone bottomRadius=\'${radio}\' height=\'${altura}\'></cone></shape></transform>`);
    }

    const crearToro = (radioInterior = 0, radioExterior = 0, color, posicionX, posicionY, posicionZ) => {
        const rojo = parseInt('0x' + color.slice(1,3)) / 255;
        const verde = parseInt('0x' + color.slice(3,5)) / 255;
        const azul = parseInt('0x' + color.slice(5,7)) / 255;
        x3dScene.insertAdjacentHTML('beforeend',`<transform translation=\'${posicionX} ${posicionY} ${posicionZ}\'><shape><appearance><material diffuseColor=\'${rojo} ${verde} ${azul}\'></material></appearance><torus innerRadius=\'${radioInterior}\' outerRadius=\'${radioExterior}\'></torus></shape></transform>`);
    }

    const editarFigura = (color, trasladarX, trasladarY, trasladarZ, escalarX, escalarY, escalarZ) => {

    }
})()