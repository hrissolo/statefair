const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener('click', event => {
    const thingThatGotClicked = event.target
    if (thingThatGotClicked.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener('click', event => {
    const thingThatGotClicked = event.target
    if (thingThatGotClicked.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener('click', event => {
    const thingThatGotClicked = event.target
    if (thingThatGotClicked.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener('click', event => {
    const thingThatGotClicked = event.target
    if (thingThatGotClicked.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
        eventHub.dispatchEvent(sideshowEvent)
    }
})

eventHub.addEventListener('click', event => {
    const thingThatGotClicked = event.target
    if (thingThatGotClicked.id === "fullTicket") {
        const fullEvent = new CustomEvent("fullTicketPurchased")
        eventHub.dispatchEvent(fullEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullTicket">Full Package Ticket</button>
        </div>
    `
}

