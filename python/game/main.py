import pygame
import sys

pygame.init()

WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Game")

#colors 
WHITE = (255, 255, 255)
RED = (255, 0, 0)

ball = pygame.Rect(WIDTH//2, HEIGHT//2, 30, 30)
ball_speed = [3, 3]

clock = pygame.time.Clock()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
            
        
    ball.x += ball_speed[0]
    ball.y += ball_speed[1]
    
    
    if ball.left <= 0 or ball.right >= WIDTH:
        ball_speed[0] = -ball_speed[0]
    if ball.top <= 0 or ball.bottom <= HEIGHT:
        ball_speed[1] = -ball_speed[1]
        
        
    screen.fill(WHITE)
    pygame.draw.ellipse(screen, RED, ball)
    pygame.display.flip()
    
    clock.tick(1000000)