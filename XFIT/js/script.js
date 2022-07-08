function application()
{
    var block1 = document.querySelector('#block1');
    var textBox = document.querySelector('#textbox');
    var checkbox = document.querySelector('#checkbox');

    if (textBox != null && checkbox.checked)
    {
        var block2 = document.querySelector('#block2');
        //block1.style.visibility = 'hidden';
        //textBox = typeof textBox;
        //block2.style.visibility = 'visible';
        block1.style.display = 'none';
        block2.style.display = 'block';
    }
}