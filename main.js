cont getcss = (variavel) =>{
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyPriorityValue(variavel)
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

export {getCSS, tickConfig}