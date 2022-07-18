function render(row,column)
{
    var resume = "<table cellpadding='0' cellspacing='0'>";
    for(var i=0;i<row;i++)
    {
        resume += "<tr>";
        for(var j=0; j<column;j++)
        {
            resume +="<td>";
            resume +="<button id='but"+i+"_"+j+"' onclick=\"check()\"></button>";
            resume +="</td>";
        }
        resume +="</tr>";
    }
    resume += "</table>";
    return resume;
}

function playgame()
{
    var rows = document.getElementById("row").value;
    var columns = document.getElementById("column").value;
    document.getElementById("main").innerHTML = render(rows, columns);
}

function check()
{
}