from PIL import Image
import os

image_dir = "/home/ubuntu/elegant_empire_comparison/public/images/"
files = os.listdir(image_dir)

for file in files:
    if file.lower().endswith(('.jpg', '.jpeg', '.png')):
        path = os.path.join(image_dir, file)
        try:
            with Image.open(path) as img:
                # Resize if too large (max 1920px width)
                if img.width > 1920:
                    ratio = 1920 / img.width
                    new_height = int(img.height * ratio)
                    img = img.resize((1920, new_height), Image.Resampling.LANCZOS)
                
                # Save with optimization
                img.save(path, "JPEG", quality=80, optimize=True)
                print(f"Compressed {file}")
        except Exception as e:
            print(f"Error compressing {file}: {e}")
