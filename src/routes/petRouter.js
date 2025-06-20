import { Router } from 'express'
import { PetController } from '#controllers/petController.js'

export const petRouter = Router()

petRouter.post('/', PetController.addPet)

petRouter.get('/', PetController.getAllPets)
petRouter.get('/detail', PetController.getDetailedPet)
petRouter.get('/user/:userId', PetController.getByUser)
petRouter.get('/:id', PetController.getById)

petRouter.patch('/:id', PetController.updatePet)
petRouter.delete('/:id', PetController.deletePet)
