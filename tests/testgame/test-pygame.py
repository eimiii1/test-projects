import pygame 
import sys 
import os

# initialize pygame 
pygame.init()

# create the window 
height = 400
width = 700
window = pygame.display.set_mode((width, height))
caption = "pygame test window"
pygame.display.set_caption(caption)

# initialize the clock variable 
clock = pygame.time.Clock()

# initialize the rectangle 

player_img = pygame.image.load("tests/testgame/zombie.png").convert_alpha()
player_img = pygame.transform.scale(player_img, (50, 70))
player_x = 100 # rectangle x position 
player_y = 100 # rectangle y position
player_speed = 5 # movement speed

# main game loop 
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
            
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT] and player_x > 0:
        player_x -= player_speed 
    if keys[pygame.K_RIGHT] and player_x < width - player_img.get_width():
        player_x += player_speed 
    if keys[pygame.K_UP] and player_y > 0:
        player_y -= player_speed    
    if keys[pygame.K_DOWN] and player_y < height - player_img.get_height():
        player_y += player_speed
        
    window.fill((255, 255, 255)) # rgb color for white
    window.blit(player_img, (player_x, player_y))
    
    # update te display 
    
    pygame.display.flip()
    
    # set the frame rate 
    clock.tick(60)
pygame.quit()
sys.exit()
# end of game loop