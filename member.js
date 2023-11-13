function skillsMember(skills) {
    let result = []
    for (let i = 0; i < skills.length; i++) {
        result.push(skills[i].name)
    }
    return result
}