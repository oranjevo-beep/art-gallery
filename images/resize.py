from PIL import Image
import os


def resize_images(input_dir, output_dir, size):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for filename in os.listdir(input_dir):
        if filename.endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp')):
            img = Image.open(os.path.join(input_dir, filename))
            img = img.resize(size, Image.LANCZOS)
            img.save(os.path.join(output_dir, filename))
            print(f'Resized and saved {filename}')


input_directory = './to_optimize/'
output_directory = './optimized'
new_size = (800, 600)  # Width, Height

resize_images(input_directory, output_directory, new_size)
