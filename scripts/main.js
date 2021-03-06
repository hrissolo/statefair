// Import and invoke the ticket booth component function

import { TicketBooth } from "./TicketBooth.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { FoodTicketHolders } from "./food/FoodTicketHolder.js"
import { GameTicketHolders } from "./games/GameTicketHolder.js"
import { SideshowTicketHolders } from "./sideshows/SideshowHolder.js"
import { FullTicketHolders }  from "./fullpackage/FullTicketHolder.js"

TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
FullTicketHolders()