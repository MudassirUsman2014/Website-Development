
import turtle

# ==========================================
# PART 1: Setting Up the Canvas
# ==========================================
screen = turtle.Screen()
screen.bgcolor("black")
screen.title("Neon Mandala")

# ==========================================
# PART 2: Configuring the Turtle Pen
# ==========================================
board = turtle.Turtle()
board.speed("fastest")
board.hideturtle()

# ==========================================
# PART 3: Glowing Colour Spiral
# ==========================================
colors = ["#ff0055", "#00ffff", "#ff00ff", "#ffff00", "#00ff66", "#0099ff"]

for i in range(80):
    board.color(colors[i % len(colors)])
    board.width(2)
    board.forward(i * 2)
    board.right(91)

# ==========================================
# PART 4: Gold Filled 5-Pointed Star at Centre
# ==========================================
board.penup()
board.goto(0, -60)
board.setheading(90)
board.pendown()

board.color("gold", "yellow")
board.begin_fill()

for _ in range(5):
    board.forward(130)
    board.right(144)

board.end_fill()

# ==========================================
# PART 5: Ring of 36 Filled Colour Petals
# ==========================================
board.penup()
board.goto(0, 0)
board.pendown()

petal_colors = ["#ff3366", "#33ccff", "#cc33ff", "#ffff33", "#33ff66"]

for i in range(36):
    board.color(petal_colors[i % len(petal_colors)])
    board.begin_for_fill = True # Standard tracking begins
    board.begin_fill()
    
    # Draw a single square petal
    for _ in range(4):
        board.forward(55)
        board.right(90)
        
    board.end_fill()
    board.right(10)  # Rotate the outer ring by 10 degrees (36 * 10 = 360)

# Keep the window open until clicked
turtle.done()