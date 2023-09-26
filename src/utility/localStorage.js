const getDonations = () => {
    const storeDonation = localStorage.getItem('Donations')
    if(storeDonation){
        return JSON.parse(storeDonation)
    }else{
        return[]
    }
}

const saveDonations = (id) => {
    const storedDonation = getDonations()
    
    const exists = storedDonation.find(donationID => donationID.id == id)
    
    if(!exists){
        storedDonation.push(id)
        localStorage.setItem('Donations', JSON.stringify(storedDonation))
    }
}

export {saveDonations, getDonations}