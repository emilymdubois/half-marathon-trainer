# half-marathon-trainer

A command line tool to generate a custom half marathon training plan courtesy of [Hal Higdon](http://www.halhigdon.com/training/51130/Half-Marathon-Training-Guide). Provide your half marathon date and plan, and it will generate a training schedule in Markdown.

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
+ `advanced`
+ `hm3`
+ `intermediate-1`
+ `intermediate-2`
+ `novice-1`
+ `novice-2`
+ `walk`
