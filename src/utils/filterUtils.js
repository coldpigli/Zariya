const sortByDate = (filterState, noteList) => {
    switch (filterState.sortByDate) {
        case "newestFirst":
            return [...noteList].sort((a,b)=> new Date(a.date)-new Date(b.date))
        case "oldestFirst":
            return [...noteList].sort((a,b)=> new Date(b.date)-new Date(a.date))
        default: 
            return noteList;
    }
}

const sortByPriority = (filterState, noteList) => {
    switch (filterState.sortByPriority) {
        case "high":
            console.log(noteList.filter((note)=>note.priority==="high"))
            return noteList.filter((note)=>note.priority==="high")
        case "medium":
            console.log(noteList.filter((note)=>note.priority==="medium"))
            return noteList.filter((note)=>note.priority==="medium")
        case "low":
            console.log(noteList.filter((note)=>note.priority==="low"))
            return noteList.filter((note)=>note.priority==="low")
        default:
            console.log(noteList)
            return noteList;
    }
}

const filterByLabel = (filterState, noteList) => {
    switch (filterState.filterByLabel) {
        case "thoughts":
            return noteList.filter((note)=>note.label==="thoughts")
        case "work":
            return noteList.filter((note)=>note.label==="work")   
        case "shopping":
            return noteList.filter((note)=>note.label==="shopping")
        case "todo":
            return noteList.filter((note)=>note.label==="todo")
        default:
            return noteList
    }
}

const composeAll = (filterState, ...args) => (notes)=> {
   return args.reduce((acc, curr)=>{
            return curr(filterState, acc);
    },notes)
}

const getFilteredNotes = (filterState, notes) => {
   return composeAll(filterState, sortByDate, sortByPriority, filterByLabel)(notes)
}


 
export {
    sortByDate, sortByPriority, filterByLabel, getFilteredNotes
}