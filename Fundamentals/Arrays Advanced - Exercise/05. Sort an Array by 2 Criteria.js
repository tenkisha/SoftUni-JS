function sort(names) {
  
    let sorting = names.sort()
  
    let sortingByLength = sorting.sort((a,b) => a.length - b.length)
      
    
  
    console.log(sorting.join("\n"));
  }

  sort(['alpha', 'beta', 'gamma'])