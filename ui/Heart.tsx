import { motion } from "framer-motion"

export const HEART_PATH =
  "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"

const emojis = ["👍", "🙏", "🥰"]

export const Heart = ({
  likes,
  enableEmojis = true,
  className = "w-12",
}: {
  likes: number
  enableEmojis?: boolean
  className?: string
}) => {
  return (
    <div className="relative">
      {/* Thank you emojis */}
      {enableEmojis ? (
        <div className="absolute w-full text-2xl text-center">
          {emojis.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial="hide"
                className="absolute w-full"
                // Animate each emoji after a like action
                animate={likes === index + 1 ? "show" : "hide"}
                variants={{
                  hide: { translateY: -80, opacity: 0 },
                  show: {
                    translateY: [0, -50, -80],
                    opacity: [0, 1, 0],
                  },
                }}
              >
                {item}
              </motion.div>
            )
          })}
        </div>
      ) : null}

      {/* Heart */}
      <motion.svg
        viewBox="0 0 20 20"
        className={className}
        // Grow heart from center
        style={{ originX: "50%", originY: "50%" }}
        // animated onHover and onClick
        whileHover="hover"
        whileTap="active"
        variants={{
          hover: {
            scale: 1.15,
          },
          active: {
            scale: 1.3,
          },
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#FACC15", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#EF4444", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#EC4899", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Heart shape mask */}
        <mask id="mask" mask-type="alpha" maskUnits="userSpaceOnUse">
          <path d={HEART_PATH} />
        </mask>

        <g mask="url(#mask)">
          {/* Background */}
          <rect width="20" height="20" fill="#E5E7EB" />

          {/* Fill */}
          <motion.rect
            width="16"
            height="16"
            animate={String(likes)}
            x="2"
            y="2"
            fill="url(#gradient)"
            initial="0"
            variants={{
              "0": { translateY: 17 },
              "1": { translateY: 12 },
              "2": { translateY: 8 },
              "3": { translateY: 1 },
            }}
          />
        </g>
      </motion.svg>
    </div>
  )
}
