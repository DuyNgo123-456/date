function date(){
    let month=+document.getElementById('month').value;
    
    if ((month==1) || (month==3) || (month==5) || (month==7) || (month==8) || (month==10) || (month==12)){
        alert("Tháng này có 31 ngày");
    }else if((month==4) || (month==6) || (month==9) || (month==11)){
        alert("Tháng này có 30 ngày");
    } else{
        alert("Tháng này có 29 hoặc 30 ngày tùy theo năm nhuận");
    }
}
