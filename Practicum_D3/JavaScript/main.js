document.addEventListener("DOMContentLoaded", function () {
    const width = 600;
    const height = 600;
    const svg = d3.select("svg").attr("width", width).attr("height", height);

    //let pict = drawSmile(svg);
    //pict.attr("transform", "translate(200, 200)");
    //let pict1 = drawSmile(svg);
    //pict1.attr("transform", `translate(400, 400) scale(1.5, 1.5) rotate(180)`);

    
    
    window.global_inner_frst_p_Cord  = document.getElementById("Cord").innerHTML; 
})

let runAnimation = (dataForm) => {

    //console.log(!dataForm.checkGo.checked);
    if (!dataForm.checkGo.checked) {

        if (dataForm.fieldsFirst.selectedOptions[0].value == 3) {
            const svg = d3.select("svg");
            let pict = drawSmile(svg);
            pict.attr("transform", `translate(${dataForm.cx.value}, ${dataForm.cy.value})`)
                .transition()
                .duration(6000)
                .ease(d3.easeBounce)
                .attr("transform", `translate(${dataForm.cx_finish.value}, ${dataForm.cy_finish.value}) scale(${scaleXDo.value}, ${scaleYDo.value}) rotate(${angle_do.value})`);
        }
        if (dataForm.fieldsFirst.selectedOptions[0].value == 2) {
            const svg = d3.select("svg");
            let pict = drawSmile(svg);
            pict.attr("transform", `translate(${dataForm.cx.value}, ${dataForm.cy.value})`)
                .transition()
                .duration(6000)
                .ease(d3.easeElastic)
                .attr("transform", `translate(${dataForm.cx_finish.value}, ${dataForm.cy_finish.value}) scale(${scaleXDo.value}, ${scaleYDo.value}) rotate(${angle_do.value})`);
        }
        if (dataForm.fieldsFirst.selectedOptions[0].value == 1) {
            const svg = d3.select("svg");
            let pict = drawSmile(svg);
            console.log(dataForm.cx.value);
            console.log(dataForm.cy.value);
            pict.attr("transform", `translate(${dataForm.cx.value}, ${dataForm.cy.value})`)
                .transition()
                .duration(600)
                .ease(d3.easeLinear)
                .attr("transform", `translate(${dataForm.cx_finish.value}, ${dataForm.cy_finish.value}) scale(${scaleXDo.value}, ${scaleYDo.value}) rotate(${angle_do.value})`);
        }
    } else {
       
        if (dataForm.fieldsFirst.selectedOptions[0].value == 1) {
            let path = drawPath(dataForm.fieldsGo.selectedOptions[0].value);
            const svg = d3.select("svg");
            let pict = drawSmile(svg);
            pict.transition()
                .ease(d3.easeLinear) // установить в зависимости от настроек формы
                .duration(6000)
                .attrTween('transform', translateAlong(path.node()));
               
        }

        if (dataForm.fieldsFirst.selectedOptions[0].value == 2) {
            let path = drawPath(dataForm.fieldsGo.selectedOptions[0].value);
            const svg = d3.select("svg");
            let pict = drawSmile(svg);
            pict.transition()
                .ease(d3.easeElastic) // установить в зависимости от настроек формы
                .duration(6000)
                .attrTween('transform', translateAlong(path.node()));
        }

        if (dataForm.fieldsFirst.selectedOptions[0].value == 3) {
            let path = drawPath(dataForm.fieldsGo.selectedOptions[0].value);
            const svg = d3.select("svg");
            let pict = drawSmile(svg);
            pict.transition()
                .ease(d3.easeBounce) // установить в зависимости от настроек формы
                .duration(6000)
                .attrTween('transform'  , translateAlong(path.node()));
        }
    }
}

let VisibleGo = (dataform) => {

    //console.log(dataform.checkGo.checked);
    //console.log(global_inner_frst_p);

    frst_p = document.getElementById("Cord");
    defultinnet = frst_p.innerHTML;
    global_inner_frst_p_Go = '<b>Пути перемещения</b><br> <select id="fieldsGo"> <option value="0">Буквой "Г"</option> <option value="1">По кругу</option> </select>';
    console.log(global_inner_frst_p_Go);
    if (dataform.checkGo.checked) frst_p.innerHTML = global_inner_frst_p_Go;
    else frst_p.innerHTML = global_inner_frst_p_Cord;

    //const pElement = document.getElementById('frst_P_Go');
    //const elementToReplace = document.getElementById('Cord');

    //if (dataform.checkGo.checked) elementToReplace.replaceWith(pElement);
    //else frst_p.innerHTML = global_inner_frst_p_Cord;

    

    //pElement.replaceWith(elementToReplace);
}
let visibleAnimation = () => {

    
    AntiVisible(document.getElementById("checkGoSpan"));
    AntiVisible(document.getElementById("checkGo"));
    AntiVisible(document.getElementById("fieldsFirst"));
    AntiVisible(document.getElementById("butanimat"));
    AntiVisible(document.getElementById("cx_finish"));
    AntiVisible(document.getElementById("cy_finish"));
    AntiVisible(document.getElementById("cy_finish_label"));
    AntiVisible(document.getElementById("cx_finish_label"));
    AntiVisible(document.getElementById("angle_label"));
    AntiVisible(document.getElementById("angle_do"));
    AntiVisible(document.getElementById("scale_x_label"));
    AntiVisible(document.getElementById("scaleXDo"));
    AntiVisible(document.getElementById("scale_y_label"));
    AntiVisible(document.getElementById("scaleYDo"));
}

function AntiVisible (item) {
    if (item.style.visibility == 'hidden') item.style.visibility = 'visible';
    else item.style.visibility = 'hidden';
    return " ";
}

let draw = (dataForm) => {
    const svg = d3.select("svg")
    let pict = drawSmile(svg)
    pict.attr("transform", `translate(${dataForm.cx.value},${dataForm.cy.value}) scale(${scaleX.value}, ${scaleY.value}) rotate(${angle.value})`);
}

let clearSVG = () => {
    const svg = d3.select("svg");
    svg.selectAll("*").remove();
}