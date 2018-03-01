# half-marathon-trainer

A command line tool to generate a custom half marathon training plan courtesy of [Hal Higdon](http://www.halhigdon.com/training/51130/Half-Marathon-Training-Guide). Provide your half marathon date and plan, and it will generate a training schedule in Markdown.

![](assets/preview.png)

## Usage

### 1. Install dependencies

```
git clone git@github.com:emilymdubois/half-marathon-trainer.git
cd half-marathon-trainer
npm link
```

### 2. Generate your schedule

```sh
half-marathon-trainer --date 2018-06-24 --plan intermediate-1
```

#### `--date`
Must be in the YYYY-MM-DD format.

#### `--plan`
Must be one of the following plans:
+ [`advanced`](http://www.halhigdon.com/training/51133/Half-Marathon-Advanced-Training-Program)
+ [`hm3`](http://www.halhigdon.com/training/64492/Half-Marathon-Walk-Training-Program-HM3)
+ [`intermediate-1`](http://www.halhigdon.com/training/64474/Half-Marathon-Walk-Training-Program-Intermediate-1)
+ [`intermediate-2`](http://www.halhigdon.com/training/64471/Half-Marathon-Walk-Training-Program-Intermediate-2)
+ [`novice-1`](http://www.halhigdon.com/training/51131/Half-Marathon-Novice-1-Training-Program)
+ [`novice-2`](http://www.halhigdon.com/training/51312/Half-Marathon-Novice-2-Training-Program)
+ [`walk`](http://www.halhigdon.com/training/51134/Half-Marathon-Walk-Training-Program)
