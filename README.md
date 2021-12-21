# Online-Edu-Helper Demo

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Custom dataset](#custom-dataset)
- [Install](#install)
- [Usage](#usage)



## General info

> Sookmyung Women's University 2021 Computer Vision final term project
>
> Team Member : 서희(0hee0), 이도연(omocomo)
>
> Duration of development : 2021.12.15-2021.12.19


Real-time service based on object detection, Online Edu Helper demo

: Detecting face, phone, school supplies in webcam to help remote class management


![image](https://user-images.githubusercontent.com/53266682/146955603-fa0c0d1f-349c-4ccb-9961-2db61b866d2b.png)



## Technologies

  ![Tensorflow](https://img.shields.io/badge/Tensorflow-%23FF6F00.svg?style=for-the-badge&logo=tensorflow&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-%23000000.svg?style=for-the-badge&logo=flask&logoColor=white) ![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)



## Custom dataset

* Goal — To detect face, phone, school supplies in webcam
* Application — To help remote class management
* Details — 2200 images with bounding boxes over 9 classes
  * face (400), smartphone (200)
  * ruler, glue, ocarina, recorder, scissors, pen, book (each 200)
  * mix (200)



## Install

### activate conda

#### 🍎 for m1 mac  

**install xcode command line tools**

`xcode-select --install`

**install Miniforge**

_https://developer.apple.com/metal/tensorflow-plugin/_

```
chmod +x ~/Downloads/Miniforge3-MacOSX-arm64.sh
sh ~/Downloads/Miniforge3-MacOSX-arm64.sh
source ~/miniforge3/bin/activate
```

**create conda env** 

- python version important; python 3.9 or higher is not supported (2021.12)

- If Anaconda3 is installed, make sure to delete it and check if conda is running on miniforge3 through `conda info`

```
conda create —name tf27 python=3.8 
conda activate tf27
```

### install packages

#### 🍎 for m1 mac

**install tensorflow**

```
conda install -c apple tensorflow-deps
pip install tensorflow-macos
pip install tensorflow-metal
```

**install object_detection**

1) download the models

   `!git clone --q https://github.com/tensorflow/models.git`

2. compiles the proto buffers

   `cd models/research`

   `!protoc object_detection/protos/*.proto --python_out=.`

3. setting up environment variables _(Enter a local path to models/ in `YOUR_PATH`)_

   ``` 
   $ vi ~/.bash_profile
   export PYTHONPATH="YOUR_PATH/models:YOUR_PATH/models/slim"
   
   vi ~/.zshrc
   source ~/.bash_profile
   ```

4. REBOOT

5. final install and setup of object detection API

   ```
   python setup.py build
   python setup.py install
   ```

_(ModuleNotFoundError: No module named 'tf_slim'    `pip install --upgrade tf-slim`)_

**install packages for `app.py`**

`pip install -r requirements.txt`



## Usage

### Flask

`python run.app`

### React

```
cd client
yarn
yarn start
```

