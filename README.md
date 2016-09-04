# E-Commerce-MicroService-Architecture
Angular2+ Node Based Micro Service Architecture 






# Pieces
     User Management System
      
    Product Management System
      
    Orders Management System

    Payments Management System

    Mailings

    Logistics

    Front End




## API Server (api.)
    [Elastic, Mongodb, Redis, Koa(NodeJs), bull/other(message queue)]
    Products Information 
    Payments 
    Cart
    Orders
    Communication channel for(->) Auth Server.
    Communication channel for(<->) Drupal Server.
    Communication channel for(->) FrontEndServer.
    + Handling of anonymous user or scraper 
    + Securing API

     
## Auth Server (auth.)
    [JWT, Koa, Redis, Mongodb] 
    User Authentication and Authorization 
    User Information
    Provide Communication channel for(<->) Drupal
    + Hacker attacks

## FrontEnd Server 
    [Koa, Angular Universal ]
    Serve Angular2 pages to client
    Server Side rendering with cache. 
    
## Drupal Server 
    [Elastic] 
    Manage User by Communication with Auth Server
    Manage Orders which are confirm only, Logistics
    Manage Product Information 
    Manage Seller Information





client 
    -> Web Interface 
    -> FrontEndServer (Node, Koa, Angular2, Redis)  
    -> API Server (Node, Koa, Elastic, Mongodb, Redis, bull( other message queue))

client  -> [ Authentication/ Authorization] -> Auth Server  ------> Drupal    


client -> [Placing order] -> API Server -> Auth Server      
          [Payments]      -> API Server -> Auth Server -> [Confirm] -> API Server -> Drupal 



                        


