
function editarRow(etiqueta)

    {

        if (editando == false)
        {

            $(document).ready(function(){

        
                $('#DatosEditados').show();
               // $('#'+etiqueta).hide();
                
            });
            editando = true;
            var Row = document.getElementById(etiqueta);
            var alimen = document.getElementById(etiqueta+"1").innerText;
            var calo = document.getElementById(etiqueta+"2").innerText;
            var grass = document.getElementById(etiqueta+"3").innerText;
            var proteina = document.getElementById(etiqueta+"4").innerText;
            var carb = document.getElementById(etiqueta+"5").innerText;
            Row.innerHTML="<tr id=\"coll1_2\">\n" +
                "                        <td>\n" +
                "                            <input name = 'alimento' id=\"item1\"  onfocus='this.select();'>\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input name = 'calorias' type='number' step=\"0.01\" id=\"item2\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input name = 'grasas'  type='number' step=\"0.01\" id=\"item3\" >\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input name = 'proteina' type='number' step=\"0.01\" id=\"item4\" value=>\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <input  name = 'Carbohidratos' type='number'  step=\"0.01\" id=\"item5\">\n" +
                "                        </td>\n" +
                "                        <td>\n" +
                "                            <select name=\"ok\" id=\"ok\">\n" +
                "\t\t\t\t <option value=\"Bien\">Bien</option>\n" +
                "  \t\t\t\t<option value=\"Mal\">Mal</option>\n" +
                "\t\t\t\t</select>\n" +
                "                         <td>\n" +
                "                            <button class='btn btn-secondary\' type='reset'>En edicion</button>\n" +
                "                         </td>   \n" +
                "                    </tr> \n";

            $(document).ready(function(){
                $('#item1').val(alimen);
                $('#item2').val(calo);
                $('#item3').val(grass);
                $('#item4').val(proteina);
                $('#item5').val(carb);
            });
        }
        else
        {
            alert("Solo se puede editar una línea. Recargue la página para poder editarotra")
        }
        
    }



    function validar()
    {
        var alimento = document.getElementById("item1").value;
        var Calorias = document.getElementById("item2").value;
        var Grasa = document.getElementById("item3").value;
        var Proteina = document.getElementById("item4").value;
        var carbohidrado = document.getElementById("item5").value;


        if (alimento == "Ingrese nombre alimento" || alimento == "")
        {
            alert("debe ingresar un dato en alimento");
            return false;
        }
        if (Calorias =="")
        {
            alert("debe ingresar el numero de calorias del alimento");
            return false;
        }
        if (Grasa =="")
        {
            alert("debe ingresar el numero de Grasa del alimento");
            return false;
        }
        if (Proteina =="")
        {
            alert("debe ingresar el numero de Proteina del alimento");
            return false;
        }
        if (carbohidrado =="")
        {
            alert("debe ingresar el numero de carbohidrado del alimento");
            return false;
        }
        if(alimento == "Arandano"||alimento == "Platano"||alimento == "Cereza")
        {
            alert("Debe registrar un elemento que no se encuentré en la tabla");
            return false;
        }

        return true;
    }




   