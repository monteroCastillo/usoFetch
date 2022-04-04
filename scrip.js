    window.onload = iniciar;

    function iniciar(){
        let boton = document.getElementById("btnCargar");
        boton.addEventListener('click', clickBoton);

    }
    async function cargarURL(url){
        let response = await fetch(url);
        return response.json();
    }

    async function clickBoton(){

        let pais=document.getElementById('selectPais').value;
        let fecha=document.getElementById('inputFecha').value;

        let url = `https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`
        let json= await cargarURL(url);
        
        
        
        let estadisticas = json.dates[fecha].countries[pais];
        
        //let confirmados;
        //estadisticas.today_confirmed == undefined ? confirmados = "Sin datos" : confirmados = estadisticas.today_confirmed
        document.getElementById('today_confirmed').innerHTML=validar( estadisticas.today_confirmed)        
        document.getElementById('today_deaths').innerHTML= validar(estadisticas.today_deaths )
        
        document.getElementById('today_hospitalised_patients_with_symptoms').innerHTML=validar(estadisticas.today_hospitalised_patients_with_symptoms);
        document.getElementById('today_intensive_care').innerHTML=validar(estadisticas.today_intensive_care )
        document.getElementById('today_new_confirmed').innerHTML= validar(estadisticas.today_new_confirmed )
        document.getElementById('today_new_hospitalised_patients_with_symptoms').innerHTML= validar(estadisticas.today_new_hospitalised_patients_with_symptoms)
        document.getElementById('today_new_intensive_care').innerHTML= validar(estadisticas.today_new_intensive_care )
        document.getElementById('today_new_deaths').innerHTML= validar(estadisticas.today_new_deaths )
        document.getElementById('today_new_open_cases').innerHTML= validar(estadisticas.today_new_open_cases )
        document.getElementById('today_new_recovered').innerHTML= validar(estadisticas.today_new_recovered )
        document.getElementById('today_new_total_hospitalised_patients').innerHTML= validar(estadisticas.today_new_total_hospitalised_patients)

    }

    function validar(var1){
        let respuesta = "";
        var1 == undefined ? respuesta = "Sin datos" : respuesta = var1
        return respuesta;

    }





    
    
    function cargarJson(){
            
        fetch('api.covid19tracking.narrativa.com/api/2020-05-22/country/germany')
            .then(response => response.json())
            .then(jsonCargado);
        } 
       

    function jsonCargado(json){
        let titulo = json.title

        let completo =json.completed ? "Esta completo" : "Esta incompleto";
        
        let post =document.getElementById("txtNombrePost");
        post.innerHTML= titulo;

        let completed =document.getElementById("txtCompleto");
        completed.innerHTML= completo;

        console.log(json.userId);
    }
    cargarJson();