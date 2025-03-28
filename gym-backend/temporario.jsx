import React, { cloneElement, useEffect, useState } from "react";

export const View_calc = () => {

    //ENTRADA DE DADOS - PERIMERTIA
    const [Braco_Relaxado_Esquerdo, setBraco_Relaxado_Esquerdo] = useState("");
    const [Braco_Relaxado_Direito, setBraco_Relaxado_Direito] = useState("");
    const [Braco_Contraido_Esquerdo, setBraco_Contraido_Esquerdo] = useState("");
    const [Braco_Contraido_Direito, setBraco_Contraido_Direito] = useState("");
    const [Antebraco_Esquerdo, setAntebraco_Esquerdo] = useState("");
    const [Antebraco_Direito, setAntebraco_Direito] = useState("");
    const [Coxa_Esquerdo, setCoxa_Esquerdo] = useState("");
    const [Coxa_Direita, setCoxa_Direita] = useState("");
    const [Perna_Esquerdo, setPerna_Esquerdo] = useState("");
    const [Perna_Direita, setPerna_Direita] = useState("");
    const [Torax, setTorax] = useState("");
    const [Abdômen, setAbdômen] = useState("");

    //ENTRADA DE DADOS - DOBRAS CUTÂNEAS (mm)
    const [Toracica_Peitoral, setToracica_Peitoral] = useState("");
    const [Subsecapular, setSubsecapular] = useState("");
    const [Axilar_Média, setAxilar_Média] = useState("");
    const [Triciptal, setTriciptal] = useState("");
    const [Abdominal, setAbdominal] = useState("");
    const [Supra_ilíaca, setSupra_ilíaca] = useState("");
    const [Coxa, setCoxa] = useState("");

    //ENTRADA DE DADOS - DOBRAS CUTÂNEAS (EXTRA)
    const [Biciptal, setBiciptal] = useState("");
    const [Panturrilha, setPanturrilha] = useState("");

    //ENTRADA DE DADOS - PESO ATUAL e IDADE
    const [KG, setKG] = useState("");
    const [IDADE, setIDADE] = useState("");

     //DATA
     var data = new Date()
     var dia = String(data.getDate()).padStart(2, '0') //trasforma 1 em 01
     var mes = String(data.getMonth() + 1).padStart(2, '0') //trasforma 1 em 01
     var ano = data.getFullYear() // 2023
     const hora = String(data.getHours()).padStart(2, '0') //trasforma 1 em 01
     const minuto = String(data.getMinutes()).padStart(2, '0') //trasforma 1 em 01
     const segundo = String(data.getSeconds()).padStart(2, '0') //trasforma 1 em 01
     var dataAtual = `${dia}/${mes}/${ano}`
    
    return (
        <div>
            <div>
                
                <h4>Email do aluno:</h4>
                <input type="text" name="email_aluno" placeholder="email@aluno.com" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <h2>Perimetria</h2>
                
                Braco Relaxado <br></br>
                <input type="text" placeholder={"Esquerdo (valor em cm)"} id="Braço_Relaxado_Esquerdo_Perimetria_Input" value={Braço_Relaxado_Esquerdo} onChange={(e) => setBraço_Relaxado_Esquerdo(e.target.value)}/>
                <input type="text" placeholder={"Direito (valor em cm)"} id="Braço_Relaxado_Direito_Perimetria_Input" value={Braço_Relaxado_Direito} onChange={(e) => setBraço_Relaxado_Direito(e.target.value)}/><br></br>

                Braço Contraido <br></br>
                <input type="text" placeholder={"Esquerdo (valor em cm)"} id="Braço_Contraido_Esquerdo_Perimetria_Input" value={Braço_Contraido_Esquerdo} onChange={(e) => setBraço_Contraido_Esquerdo(e.target.value)}/>
                <input type="text" placeholder={"Direito (valor em cm)"} id="Braço_Contraido_Direito_Perimetria_Input" value={Braço_Contraido_Direito} onChange={(e) => setBraço_Contraido_Direito(e.target.value)}/><br></br>
                
                Antebraço <br></br>
                <input type="text" placeholder={"Esquerdo (valor em cm)"} id="Antebraço_Esquerdo_Perimetria_Input" value={Antebraço_Esquerdo} onChange={(e) => setAntebraço_Esquerdo(e.target.value)}/>
                <input type="text" placeholder={"Direito (valor em cm)"} id="Antebraço_Direito_Perimetria_Input" value={Antebraço_Direito} onChange={(e) => setAntebraço_Direito(e.target.value)}/><br></br>

                Coxa <br></br>
                <input type="text" placeholder={"Esquerdo (valor em cm)"} id="Coxa_Esquerda_Perimetria_Input" value={Coxa_Esquerdo} onChange={(e) => setCoxa_Esquerdo(e.target.value)}/>
                <input type="text" placeholder={"Direito (valor em cm)"} id="Coxa_Direito_Perimetria_Input" value={Coxa_Direita} onChange={(e) => setCoxa_Direita(e.target.value)}/><br></br>

                Perna <br></br>
                <input type="text" placeholder={"Esquerdo (valor em cm)"} id="Perna_Esquerda_Perimetria_Input" value={Perna_Esquerdo} onChange={(e) => setPerna_Esquerdo(e.target.value)}/>
                <input type="text" placeholder={"Direito (valor em cm)"} id="Perna_Direito_Perimetria_Input" value={Perna_Direita} onChange={(e) => setPerna_Direita(e.target.value)}/><br></br>

                Tórax <br></br>
                <input type="text" placeholder={"valor em cm"} id="Torax_Perimetria_Input" value={Torax} onChange={(e) => setTorax(e.target.value)}/><br></br>
                Abdômen <br></br>
                <input type="text" placeholder={"valor em cm"} id="Abdomen_Perimetria_Input" value={Abdômen} onChange={(e) => setAbdômen(e.target.value)}/>
                <br></br>
                <button onClick={CriateDocumentAndCampo}>Calcular OnClick</button>
        
            </div>
                    

            <div>
                
            </div>
            
        </div>
    )
}

export default View_calc;

export function calc_perimetria() {
    //ENTRADA DE DADOS - PERIMETRIA 
    var Braço_Relaxado_Esquerdo = document.getElementById('Braço_Relaxado_Esquerdo_Perimetria_Input').value;
    var Braço_Relaxado_Direito = document.getElementById('Braço_Relaxado_Direito_Perimetria_Inpu').value;
    var Braço_Contraido_Esquerdo = document.getElementById('Braço_Contraido_Esquerdo_Perimetria_Input').value;
    var Braço_Contraido_Direito = document.getElementById('Braço_Contraido_Direito_Perimetria_Input').value;
    var Antebraço_Esquerdo = document.getElementById('Antebraço_Esquerdo_Perimetria_Input').value;
    var Antebraço_Direito = document.getElementById('Antebraço_Direito_Perimetria_Input').value;
    var Coxa_Esquerdo = document.getElementById('Coxa_Esquerda_Perimetria_Input').value;
    var Coxa_Direita = document.getElementById('Coxa_Direito_Perimetria_Input').value;
    var Perna_Esquerdo = document.getElementById('Perna_Esquerda_Perimetria_Input').value;
    var Perna_Direita = document.getElementById('Perna_Direito_Perimetria_Input').value;
    var Torax = document.getElementById('Torax_Perimetria_Input').value;
    var Abdômen = document.getElementById('Abdomen_Perimetria_Input').value;
}

export function calc_7dobrasCutaneas() {
    //ENTRADA DE DADOS - DOBRAS CUTÂNEAS (mm)
    var Toracica_Peitoral = document.getElementById('Toracica_Input').value;
    var Subsecapular = document.getElementById('Subescapular_Input').value;
    var Axilar_Média = document.getElementById('Axilar_Media_Input').value;
    var Triciptal = document.getElementById('Triciptal_Input').value;
    var Abdominal = document.getElementById('Abdominal_Input').value;
    var Supra_ilíaca = document.getElementById('Supra_iliaca_Input').value;
    var Coxa = document.getElementById('Coxa_Input').value;

    //ENTRADA DE DADOS - DOBRAS CUTÂNEAS (EXTRA)
    var Biciptal = document.getElementById('Bicipital_Input').value;
    var Panturrilha = document.getElementById('Panturrilha_Input').value;

    //ENTRADA DE DADOS - PESO
    var KG = document.getElementById('peso_input').value;

    //ENTRADA DE DADOS - IDADE
    var IDADE = document.getElementById('idade_input').value;

    //PROCESSAMENTO DE DADOS - EQUAÇÃO FÓRMULA DE SIRI
    var DC = '';
    var somatorio_das_7_dobras = parseInt(Toracica_Peitoral) + parseInt(Subsecapular) + parseInt(Axilar_Média) + parseInt(Triciptal) + parseInt(Abdominal) + parseInt(Supra_ilíaca) + parseInt(Coxa);
    var somatorio_das_7_dobras_aoQuadrado = parseInt(Toracica_Peitoral) + parseInt(Subsecapular);
    //continuar calculo matemático
}