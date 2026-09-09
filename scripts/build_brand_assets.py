#!/usr/bin/env python3
"""
Generate high-resolution PNG brand assets matching the client's uploaded assets:
- IMG_4131.png (Horizontal distressed stencil logo: CUT THE CRAP)
- IMG_4130.png (Stacked distressed stencil logo: CUT / THE / CRAP)
- IMG_4132.png (Flagship official book banner with 3D book, 4 pillar badges, QR code)
- IMG_4133.png (Founder's Edition engraved bronze/leather plaque)
- IMG_4134.png (Founder's Edition full leather banner with 3D book, plaque, QR code)
"""

import os
import subprocess

OUTPUT_DIR = "public/assets"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def run_cmd(cmd):
    print("Running:", " ".join(cmd[:6]), "...")
    subprocess.run(cmd, check=True)

def generate_img_4131():
    """Horizontal Wordmark CUT THE CRAP on black"""
    out_path = os.path.join(OUTPUT_DIR, "IMG_4131.png")
    # Base canvas 1400x380 black
    cmd = [
        "convert",
        "-size", "1400x380", "xc:#000000",
        "-fill", "#FFFFFF",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "150",
        "-gravity", "West",
        "-annotate", "+80+0", "CUT",
        "-pointsize", "65",
        "-annotate", "+450+0", "THE",
        "-fill", "#F85800",
        "-pointsize", "150",
        "-annotate", "+620+0", "CRAP",
        # Add subtle distressed film grain
        "(", "+clone", "+noise", "Uniform", "-alpha", "extract", "-threshold", "96%", "-alpha", "shape", "-fill", "black", ")",
        "-compose", "dst-out", "-composite",
        out_path
    ]
    run_cmd(cmd)
    print("Generated:", out_path)

def generate_img_4130():
    """Stacked Wordmark CUT / THE / CRAP"""
    out_path = os.path.join(OUTPUT_DIR, "IMG_4130.png")
    cmd = [
        "convert",
        "-size", "900x850", "xc:#000000",
        "-fill", "#FFFFFF",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "210",
        "-gravity", "North",
        "-annotate", "+0+40", "CUT",
        "-pointsize", "95",
        "-annotate", "+0+280", "THE",
        "-fill", "#F85800",
        "-pointsize", "220",
        "-annotate", "+0+420", "CRAP",
        "(", "+clone", "+noise", "Uniform", "-alpha", "extract", "-threshold", "96%", "-alpha", "shape", "-fill", "black", ")",
        "-compose", "dst-out", "-composite",
        out_path
    ]
    run_cmd(cmd)
    print("Generated:", out_path)

def generate_img_4133():
    """Founder's Edition Bronze Engraved Plaque"""
    out_path = os.path.join(OUTPUT_DIR, "IMG_4133.png")
    cmd = [
        "convert",
        "-size", "2000x650",
        "radial-gradient:#46301A-#1A1008",
        # Embossed dark inner carving
        "-fill", "#140B04",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "140",
        "-gravity", "North",
        "-annotate", "+0+120", "CUT THE CRAP",
        # Highlight edge
        "-fill", "#6E4C24",
        "-pointsize", "140",
        "-annotate", "+2+118", "CUT THE CRAP",
        # Main text face
        "-fill", "#26170B",
        "-pointsize", "140",
        "-annotate", "+0+120", "CUT THE CRAP",
        # Gold Founder's Edition text
        "-fill", "#D4AF37",
        "-pointsize", "95",
        "-annotate", "+0+290", "FOUNDER'S EDITION",
        # Star & wings divider
        "-pointsize", "45",
        "-annotate", "+0+420", "——————  ★  ——————",
        out_path
    ]
    run_cmd(cmd)
    print("Generated:", out_path)

def generate_img_4134():
    """Founder's Edition Full Banner with 3D book, Plaque, QR Code"""
    out_path = os.path.join(OUTPUT_DIR, "IMG_4134.png")
    cmd = [
        "convert",
        "-size", "2400x900",
        "radial-gradient:#3F2B17-#1A1007",
        # Outer bronze border
        "-stroke", "#7A5826", "-strokewidth", "6", "-fill", "none",
        "-draw", "rectangle 20,20 2380,880",
        "-stroke", "none",
        # LEFT: 3D Book Silhouette & Spine
        "-fill", "#170E06",
        "-draw", "roundrectangle 140,110 580,800 12,12",
        "-stroke", "#694A20", "-strokewidth", "2", "-fill", "#2B1A0A",
        "-draw", "roundrectangle 180,120 570,780 8,8",
        "-stroke", "none",
        # Book debossed text
        "-fill", "#0D0803",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "34",
        "-gravity", "NorthWest",
        "-annotate", "+210+200", "BECOME THE KIND OF PERSON\nWHO NEVER HAS TO LOSE\nTHE SAME WEIGHT TWICE.",
        "-pointsize", "62",
        "-annotate", "+220+340", "CUT\nTHE\nCRAP",
        "-fill", "#D4AF37",
        "-pointsize", "36",
        "-annotate", "+220+560", "★ ★ ★",
        "-pointsize", "26",
        "-annotate", "+210+680", "LUCAS HEFFNER, MBA, NASM-CNC",
        # CENTER: Founder's Header & Plaque
        "-gravity", "North",
        "-fill", "#140A04",
        "-pointsize", "125",
        "-annotate", "+120+130", "CUT THE CRAP",
        "-fill", "#D4AF37",
        "-pointsize", "75",
        "-annotate", "+120+260", "FOUNDER'S EDITION",
        "-pointsize", "40",
        "-annotate", "+120+360", "——————  ★  ——————",
        "-fill", "#E3D5C0",
        "-font", "Liberation-Serif-Italic",
        "-pointsize", "38",
        "-annotate", "+120+430", "\"Become the kind of person who never has to lose the same weight twice.\"",
        # Plaque Box
        "-stroke", "#8C682E", "-strokewidth", "3", "-fill", "#150C05",
        "-draw", "roundrectangle 820,530 1620,620 4,4",
        "-stroke", "none",
        "-fill", "#D4AF37",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "30",
        "-annotate", "+120+555", "★ LIMITED  ★  SIGNED  ★  INDIVIDUALLY NUMBERED",
        # RIGHT: QR Code & Preorder Box
        "-stroke", "#6E4C20", "-strokewidth", "2", "-fill", "#1D1208",
        "-draw", "roundrectangle 1760,110 2300,790 8,8",
        "-stroke", "none",
        "-fill", "#D4AF37",
        "-pointsize", "34",
        "-gravity", "NorthEast",
        "-annotate", "+250+150", "— PREORDER —\n— YOUR COPY —",
        # QR Mockup Box
        "-fill", "#FFFFFF",
        "-draw", "rectangle 1840,260 2220,640",
        "-fill", "#000000",
        "-draw", "rectangle 1870,290 1960,380",
        "-draw", "rectangle 2100,290 2190,380",
        "-draw", "rectangle 1870,520 1960,610",
        "-draw", "rectangle 2010,430 2050,470",
        "-fill", "#FFFFFF",
        "-draw", "rectangle 1890,310 1940,360",
        "-draw", "rectangle 2120,310 2170,360",
        "-draw", "rectangle 1890,540 1940,590",
        "-fill", "#D4AF37",
        "-draw", "circle 2030,450 2030,485",
        "-fill", "#111111",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "28",
        "-annotate", "+360+435", "★",
        "-fill", "#D4AF37",
        "-font", "Liberation-Sans",
        "-pointsize", "26",
        "-annotate", "+155+680", "Available only during the founding release.",
        out_path
    ]
    run_cmd(cmd)
    print("Generated:", out_path)

def generate_img_4132():
    """Flagship Cut The Crap Banner with 3D Book, 4 Badges, QR Code"""
    out_path = os.path.join(OUTPUT_DIR, "IMG_4132.png")
    cmd = [
        "convert",
        "-size", "2400x900",
        "radial-gradient:#222222-#0C0C0C",
        # Border
        "-stroke", "#333333", "-strokewidth", "4", "-fill", "none",
        "-draw", "rectangle 20,20 2380,880",
        "-stroke", "none",
        # LEFT: 3D Hardcover Book Mockup
        "-fill", "#000000",
        "-draw", "roundrectangle 130,100 580,800 10,10",
        "-stroke", "#444444", "-strokewidth", "2", "-fill", "#141414",
        "-draw", "roundrectangle 160,110 560,780 6,6",
        "-stroke", "none",
        "-fill", "#F85800",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "22",
        "-gravity", "NorthWest",
        "-annotate", "+200+160", "BECOME THE KIND OF PERSON WHO NEVER\nHAS TO LOSE THE SAME WEIGHT TWICE.",
        "-fill", "#FFFFFF",
        "-pointsize", "62",
        "-annotate", "+210+240", "CUT\nTHE",
        "-fill", "#F85800",
        "-annotate", "+210+380", "CRAP",
        # 4 Mini Badges on Book
        "-fill", "#F85800",
        "-draw", "circle 240,540 240,565",
        "-draw", "circle 310,540 310,565",
        "-draw", "circle 380,540 380,565",
        "-draw", "circle 450,540 450,565",
        "-fill", "#FFFFFF",
        "-pointsize", "20",
        "-annotate", "+233+532", "H",
        "-annotate", "+303+532", "Y",
        "-annotate", "+375+532", "+",
        "-annotate", "+443+532", "^",
        "-fill", "#CCCCCC",
        "-pointsize", "26",
        "-annotate", "+200+690", "LUCAS HEFFNER, MBA, NASM-CNC",
        # CENTER: Main Headline & Badges
        "-gravity", "North",
        "-fill", "#FFFFFF",
        "-pointsize", "110",
        "-annotate", "+80+110", "CUT THE CRAP",
        "-fill", "#F85800",
        "-pointsize", "46",
        "-annotate", "+80+240", "LOSE THE FAT. KEEP THE FREEDOM.",
        "-pointsize", "34",
        "-annotate", "+80+310", "——————  ★  ——————",
        "-fill", "#DDDDDD",
        "-font", "Liberation-Sans",
        "-pointsize", "34",
        "-annotate", "+80+370", "A practical approach to sustainable weight loss without the noise,\ngimmicks, or unnecessary rules.",
        # 4 Circular Orange Badges
        "-fill", "#F85800",
        "-draw", "circle 860,560 860,620",
        "-draw", "circle 1060,560 1060,620",
        "-draw", "circle 1260,560 1260,620",
        "-draw", "circle 1460,560 1460,620",
        "-fill", "#000000",
        "-draw", "circle 860,560 860,610",
        "-draw", "circle 1060,560 1060,610",
        "-draw", "circle 1260,560 1260,610",
        "-draw", "circle 1460,560 1460,610",
        "-fill", "#F85800",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "38",
        "-annotate", "+845+545", "||",
        "-annotate", "+1045+545", "Y",
        "-annotate", "+1248+545", "+",
        "-annotate", "+1445+545", "^",
        "-pointsize", "24",
        "-annotate", "+810+660", "TRAINING",
        "-annotate", "+1005+660", "NUTRITION",
        "-annotate", "+1225+660", "FAITH",
        "-annotate", "+1405+660", "DISCIPLINE",
        # RIGHT: Order / QR Block
        "-stroke", "#444444", "-strokewidth", "1", "-fill", "#141414",
        "-draw", "roundrectangle 1760,90 2320,810 8,8",
        "-stroke", "none",
        "-fill", "#F85800",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "34",
        "-gravity", "NorthEast",
        "-annotate", "+230+125", "— ORDER / PREORDER —",
        # QR Code Mockup
        "-fill", "#FFFFFF",
        "-draw", "rectangle 1840,200 2240,600",
        "-fill", "#000000",
        "-draw", "rectangle 1870,230 1970,330",
        "-draw", "rectangle 2110,230 2210,330",
        "-draw", "rectangle 1870,470 1970,570",
        "-draw", "rectangle 2020,380 2060,420",
        "-fill", "#FFFFFF",
        "-draw", "rectangle 1895,255 1945,305",
        "-draw", "rectangle 2135,255 2185,305",
        "-draw", "rectangle 1895,495 1945,545",
        "-fill", "#F85800",
        "-draw", "circle 2040,400 2040,440",
        "-fill", "#FFFFFF",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "30",
        "-annotate", "+348+385", "★",
        # Footer text below QR
        "-fill", "#FFFFFF",
        "-font", "Liberation-Sans-Bold",
        "-pointsize", "26",
        "-annotate", "+210+620", "Paperback  •  Hardcover  •  eBook",
        "-fill", "#F85800",
        "-pointsize", "24",
        "-annotate", "+200+665", "lucasheffner.com/cutthecrap",
        "-fill", "#888888",
        "-font", "Liberation-Sans",
        "-pointsize", "18",
        "-annotate", "+140+720", "TOOLBOX: lucasheffner.com/toolbox | COMMUNITY: lucasheffner.com/community",
        out_path
    ]
    run_cmd(cmd)
    print("Generated:", out_path)

if __name__ == "__main__":
    generate_img_4131()
    generate_img_4130()
    generate_img_4133()
    generate_img_4134()
    generate_img_4132()
    print("All 5 client assets successfully generated in public/assets!")
