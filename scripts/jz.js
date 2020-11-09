$(document).ready(function(){
    var time = Date.now;
    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });
    $('#Schedulemaintenance').click(function(){
        $('#fortime').val(new Date().toDateInputValue());
    })
})