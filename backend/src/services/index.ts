import { category } from './category/category'
import { product } from './product/product'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(category)
  app.configure(product)
  // All services will be registered here
}
