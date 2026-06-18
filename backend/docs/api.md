## Auth

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

## Orders

POST /api/orders

GET /api/orders

GET /api/orders/:id

PUT /api/orders/:id

DELETE /api/orders/:id

POST /api/orders/:id/process

## Checklists

POST /api/checklists/:orderId

GET /api/checklists/:orderId

PUT /api/checklists/:itemId

PATCH /api/checklists/toggle/:itemId

DELETE /api/checklists/:itemId

## Dashboard

GET /api/dashboard/stats

GET /api/dashboard/recent-orders