let checkedItems = []

$('.checkbox').change(function(){
  if (this.checked) {
    checkedItems.push($(this).parent())
  } else {
    checkedItems.pop($(this).parent())
  }
})

$('#delete').click(function(){
  for (i=0; i<checkedItems.length; i++) {
    $(checkedItems[i]).remove()

  }
    checkedItems = []
})

$('#loadOut').click(function(){
  console.log('load-out')
})
